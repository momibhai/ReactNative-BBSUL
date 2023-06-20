import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React from 'react'

  const array =[
    {name:'Ali',email:'Ali@gmail.com',address:'Malir',image:require('./images/messages2.jpg')}
    ,{name:'Muhammad ',email:'Muha@gmail.com',address:'Lyari',image:require('./images/messages-3.jpg')}
    ,{name:'Karachi',email:'Karachi@gmail.com',address:'Karachi',image:require('./images/messages-1.jpg')}
    ,{name:'Ali',email:'Ali@gmail.com',address:'MalirKarachi',image:require('./images/content-5.png')},
    {name:'Janjan',email:'Janjan@gmail.com',address:'Karai',image:require('./images/profile-img.jpg')},
    {name:'Janjan',email:'Janjan@gmail.com',address:'Karai',image:require('./images/content-5.png')}
  ]
const App = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.mainheadertext}>WelCome To My FlateList</Text>
        <FlatList 
          data={array}
          renderItem={({item})=>
            <View style={styles.imagesview}>
              <Text style={styles.text}>
                Name:{item.name}
              </Text>
              <Text style={{marginLeft:10,marginTop:10}}>
                Email : {item.email}
              </Text>
              <Text style={{marginLeft:10,marginTop:10}}>
                Address : {item.address}
              </Text>
              <View style={{height:100,width:100,borderRadius:50,marginLeft:160,marginTop:-100,backgroundColor:'#d6d6d6'}}>
            <Image 
            style={styles.image}
            resizeMode='contain'
            source={item.image}
            />
            </View>
          </View>
          }
        />
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  text:{
    fontSize:20,
    fontWeight:'800',
    marginLeft:10,
    marginTop:20,
  },
  mainheadertext:{
    textAlign:'center',
    fontSize:25,
    color:'white',
    marginTop:20
  },
  container:{
    backgroundColor:'black',
    flex:1,
    alignItems:'center',
  },
  imagesview:{
    height:160,
    width:300,
    borderRadius:20,
    backgroundColor:'white',
    marginTop:30,
  },
  image:{
    height:100,
    width:'100%',
    marginLeft:30,
    borderRadius:50

  }
})