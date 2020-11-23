import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground, Button,ScrollView} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';


export default class foret_password extends React.Component {
  state={
    name:"",
    password:""
  }

 
 
  render(){
    const { navigate } = this.props.navigation;

    
    return (
  <ScrollView>
      <View style={styles.container}>

       <Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 
       
    
      

                       <Text style={styles.inputText}>Enter user name :</Text>
                          <View style={styles. inputs} >
                               <TextInput  
                                     style={styles.inputText1}
                                        placeholder="User name" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                          </View>

                         <Text style={styles.inputText}>Email adress:</Text>
                         <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="email" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                         </View>
                         <Text style={styles.inputText}>Phone number:</Text>
                         <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="phone number" 
                                        secureTextEntry={true}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              />
                        
                         </View>

                         <View style={styles.buttons}>
                                                <Button 
                                                title="send"
                                                color="#32a882" 
                                                />
                        </View>

              
               <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('Welcome')}
                       title="Back"
                       color="#32a882" 
                       
              />
              </View >
             
      </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
    
  },
 
  forgot:{
    color:"black",
    fontSize:15,
    paddingBottom:10.0,
  },
 
  inputText:{
    fontWeight: "bold",
    color:"black",
    fontSize: 19,
    marginLeft:20,
  },
  inputText1:{
    fontWeight: "bold",
    color:"green",
    fontSize: 16,
    
  },
  inputs:{
    borderBottomWidth: 1,
    borderColor:'#777',
    width:300,
    marginLeft:20,
    marginBottom:20,
    fontWeight: "bold",
  },
  buttons:{

    alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
   marginTop:40,
   
  },
  buttonsback:{

    alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
   marginTop:10,
   
  },
  inputTexttopic:{
    fontWeight: "bold",
    color:"black",
    fontSize: 22,
    marginTop:25,
    
   textAlign:"center",
  },
  inputTexttopic1:{
    fontWeight: "bold",
    color:"black",
    fontSize: 22,
   
    marginBottom:60,
   textAlign:"center",
  },
  forgot1:{
    fontWeight: "bold",
    color:"black",
   textAlign:"center",
   marginBottom:15,
   marginTop:15,
  },

  
});
