import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  Alert,
  Image,
  Platform
} from 'react-native'
import React, { useContext, useState } from 'react'
import { launchImageLibrary } from 'react-native-image-picker'
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import userApi from '../../api/userApi';
import { AuthContext } from '../../context/AuthContext';

const PostScreen = () => {

  // objeto, arreglo y variables.....



  const { user, token } = useContext(AuthContext);

  const [image, setImage] = useState('https://via.placeholder.com/200');
  const [response, setResponse] = useState('');

  const handleChoosePhoto = () => {
    const options = {
      title: 'Seleccionar Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }
    launchImageLibrary(options, response => {

      if (response.errorCode) {
        console.log(response.errorMessage)
      } else if (response.didCancel) {
        console.log('El usuario cancelo la acción')
      } else {
        const path = response.assets[0].uri
        setImage(path)
        console.log(path)
        setResponse(response)
      }

    })
  }

  const uploadImage = async () => {
    const uri = Platform.OS === "android" ? response.assets[0].uri : image.replace("file://", "");
    const formData = new FormData();

    // Agregamos la imagen a un formulario con el metodo append.
    formData.append("image", {
      uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });

    try {
      const response = await userApi.post('/upload', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        },
      });

      if (!response.data.isSuccess) {
        Alert.alert('Image upload failed...')
        return
      }

      return response.data;

    } catch (error) {
      console.log("El error es:", error);
    }
  }

  const formSubmit = async () => {

    const { url } = await uploadImage();

    //Crear post
    const post = {
      'title': "Mi publicacion",
      'description': 'Muy buenas',
      'pathImage': url,
      'user_id': user.id,
      'likes': 0,
      'comments': 0
    }

    try {
      const { data } = await userApi.post('/post', post, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(data);
      Alert.alert('El post fue creado correctamente.');

    } catch (error) {
      console.log("Error en la solicitud:", error);
      console.log(error.response.data.errors)
    }
  }


  return (
    <View>
      <Text>PostScreen</Text>
      <View>
        <Text>Imagen</Text>
        <View>
          <TouchableOpacity
            style={{ backgroundColor: 'blue', paddingHorizontal: 4, paddingVertical: 4, marginHorizontal: 20 }}
            onPress={() => handleChoosePhoto()}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Agregar Imagen</Text>
          </TouchableOpacity>
          <Image
            style={{ alignSelf: 'center', height: 100, width: 100, borderRadius: 10, marginLeft: 20 }}
            source={{ uri: image }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{ backgroundColor: 'red', paddingHorizontal: 4, paddingVertical: 4, marginHorizontal: 20 }}
            onPress={() => formSubmit()}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Enviar post</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <Image
        style={{ alignSelf: 'center', height: 700, width: 400, borderRadius: 10, marginLeft: 20 }}
        source={{ uri: 'http://192.168.0.2:8000/public/images/6553324fefd26_wallpaper-56.jpg' }}
      /> */}
    </View>
  )
}

export default PostScreen