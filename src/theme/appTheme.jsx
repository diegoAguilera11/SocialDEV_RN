import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#5856d6'
}



export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: 'black',
  },
  bigButton: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    marginVertical: 20,
  },
  bigButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  menuContainer: {
    marginVertical: 15,
    marginHorizontal: 40,
  },
  menuBoton: {
    marginVertical: 10
  },
  menuTexto: {
    // color: 'black',
    fontSize: 20,
    fontWeight: '700'
  },
});
