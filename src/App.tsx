import { StyleSheet, TextInput, View, Text } from 'react-native';
import MapView from 'react-native-maps';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  return (
    <View style={styles.container}>  
      <MapView style={styles.map}
      />
      <View style={styles.menubar}>
      <Ionicons name="md-menu" size={32} color="black" style={styles.menubarIconOne}
      />
      <Text style={styles.menubarText}> MAP APP</Text>
      <Ionicons name="md-filter" size={32} color="black" style={styles.menubarIconThree}
      />
      <Ionicons name="md-paper-plane-outline" size={32} color="black" style={styles.menubarIconTwo}
      />
      </View>
      <View style={styles.searcharea}>
      <Ionicons name="md-search" size={32} color="black" style={styles.icone}
      />
      <TextInput placeholder="Pesquisar"
      keyboardType="default"
      style={styles.text}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map:{
    width:'100%',
    height:'100%',
    flex: 1,
  },

  searcharea:{
    position:'absolute',
    top: 100,
    left: 22,
    width:'90%',
    height:50,
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderRadius: 50,
    elevation: 2,
    paddingHorizontal:16,
  },

  icone:{
    marginRight:16,
  },
  
  text:{
    fontSize: 20,
  },

  menubar:{
    width:'100%',
    height:70,
    backgroundColor:'transparent',
    flexDirection:'row',
    position:"absolute",
    top: 50,
    paddingHorizontal:16,

  },

  menubarText:{
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    justifyContent: 'center',
    fontWeight: '500',
    left:15,
  },
  
  menubarIconOne:{
    marginHorizontal: 1,
  },
  
  menubarIconTwo:{
    left:2,

  },

  menubarIconThree:{
    paddingHorizontal:10,
    left:1,
  },
});


