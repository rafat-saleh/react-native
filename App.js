import React, {useState}  from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();


const LoginScreen = ({navigation})=>{

  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);


  const handleSubmit = () => {
    if(!vali(name)){  Alert.alert('Enter valid name and >3');return;}
      // Alert.alert('Successfuly Login');
      navigation.navigate('Home')
  };

  const vali=(xx)=>{
      if(xx===""){return false;}
      return /^[a-zA-Z ]{4,10}$/.test(xx);
  }


  return (
    <View >
        <ImageBackground 
        source={require('./1.png')}
        style={{width: 400, height: 800}} 
         >

           
        <View style={{flexDirection:'row',marginBottom:29}}>
          <View style={{paddingTop:6 }}>
          <Icon style={{marginTop:30 ,marginHorizontal:20}} name="caretleft" size={30} color="#fff"/>
          </View>
          <View >
          <Text style={styles.sign}>SignUp</Text>
          </View>
        </View>


        <View style={{flexDirection:'row',marginBottom:17 ,justifyContent:"space-evenly"}}>
          <View >
          <Icon style={{marginHorizontal:4,textAlign:"center",backgroundColor:"grey",padding:16 ,borderRadius:20, width:150}} name="google" size={33} color="#fff"/>
          </View>
          <View >
          <Icon style={{marginHorizontal:4,padding:16,textAlign:"center",borderRadius:20,backgroundColor:"grey", width:150}} name="apple1" size={33} color="#fff"/>
          </View>
        </View>
          
      
          
      

        <Text style={styles.item}>Name</Text>
        <TextInput
        style={styles.emailAndPasswordInput}
        placeholder={'Rafat Saleh'}
        onChangeText={setName}
        placeholderTextColor="#fff" 
       /> 


      <Text style={styles.item}>Email</Text>


      <TextInput
        style={styles.emailAndPasswordInput}
        placeholder={'tim@apple.com'}
        placeholderTextColor="#fff" 
        onChangeText={setemail}
        keyboardType="email-address"
      />

  
     <Text style={styles.item}>Password</Text>
      <TextInput
        style={styles.emailAndPasswordInput}
        placeholder={'pick a password'}
        onChangeText={setPassword}
        placeholderTextColor="#fff" 
        secureTextEntry={true} /> 

      <TouchableOpacity
        style={styles.btn}
        onPress={handleSubmit}>
        <Text style={{color:'white', fontSize: 20 }}> Create Account </Text>

        </TouchableOpacity>

      <Text style={{color:'#221172', fontSize: 22 , paddingLeft:25}}>Already have an Acount
      <TouchableOpacity
        onPress={()=> navigation.navigate('Home')}>
        <Text style={{color:'white', fontSize: 19 ,fontWeight: 'bold',paddingLeft:9}}> Log in</Text>
        </TouchableOpacity>
      </Text>
    </ImageBackground>
       
    </View>
  );
};







const HomeScreen =({navigation})=>{
  return(
    <>
    <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:30}} >

      <Image
      style={styles.img}
      source={{uri: 'https://res.cloudinary.com/demo/image/upload/mountain.jpg'}}/>

      <Image
      style={styles.img}
      source={{uri: 'https://pixy.org/src/21/219269.jpg'}}/> 
    </View>


    <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}} >

      <Image
      style={styles.img}
      source={{uri: 'https://res.cloudinary.com/demo/image/upload/mountain.jpg'}}/>

      <Image
      style={styles.img}
      source={{uri: 'https://media.sciencephoto.com/image/c0134148/800wm/C0134148-Vietnam,_satellite_image.jpg'}}/> 
    </View>



    <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}} >

      <Image
      style={styles.img}
      source={{uri: 'https://www.hdnicewallpapers.com/Walls/Big/Rainbow/Rainbow_on_Mountain_HD_Image.jpg'}}/>

      <Image
      style={styles.img}
      source={{uri: 'https://res.cloudinary.com/demo/image/upload/mountain.jpg'}}/> 
    </View>   


     <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}} >

      <Image
      style={styles.img}
      source={{uri: 'https://media.sciencephoto.com/image/c0134148/800wm/C0134148-Vietnam,_satellite_image.jpg'}}/>

      <Image
      style={styles.img}
      source={{uri: 'https://www.hdnicewallpapers.com/Walls/Big/Rainbow/Rainbow_on_Mountain_HD_Image.jpg'}}/> 
    </View>
                
            
 </>

  )
}



const App = () => {

return(
   <NavigationContainer initialRouteName={'LoginScreen'}>
   <Stack.Navigator>

    <Stack.Screen 
        name='Login'
        component={LoginScreen} 
        options={{
              headerTitle: 'Login',
              headerStyle: { backgroundColor: '#585875' },
              headerTitleStyle:{color:'white', marginHorizontal:155}
            }}
         />

    <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{
              headerTitle: 'Home',
              headerStyle: { backgroundColor: '#585875' },
              headerTitleStyle:{color:'white', marginHorizontal:155}
            }} />

    
   </Stack.Navigator >
  </NavigationContainer>

)

};
export default App;

const styles = StyleSheet.create({
  sign:{
        color:"#fff",
        fontSize:27,
        marginTop:26,
        marginLeft:80
      },
  btn: {
   backgroundColor: '#B617CB',
   borderRadius:70,
   padding: 17,
   color:"white",
   paddingLeft:110,
   marginTop:50,
   width: '90%',
   height: 60,
   margin: 10,  
  },

  item: {
   color:"white",
   paddingLeft:160,
   paddingTop:11,
   fontSize: 18,
   fontFamily: 'arial',
  },
  emailAndPasswordInput: {
    width: '85%',
    height: 50,
    margin: 10,
    marginLeft:30,
    borderWidth: 2,
    borderColor: '#A12B87',
    borderRadius:20,
    fontSize: 20,
    color : "white",
    paddingLeft:40,
    fontFamily: 'arial',
  },
  img:{
    width: 140,
    height: 140,
    marginHorizontal:6,
    padding:30
},
  
});
