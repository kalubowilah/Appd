import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView, ImageBackground,Image,ScrollView,TextField,Reinput,Button, Alert } from 'react-native';


export default class wo_docter extends React.Component {

 
  

  render(){
   
    const { navigate } = this.props.navigation;
    return (
      
      
       <View style={styles.container}>

     
                 <View style={styles.buttons}>
                       <Button
                        title="Admission of patients"
                        onPress={() =>navigate('Addpatien')}
                         color="#32a882" 
                         
                      />
                   </View>

                   <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('word_docter')}
                       title="Patient details"
                       color="#32a882" 
                       
              />

             <View style={styles.buttonsback1}>
              <Button
                onPress={() => navigate('Welcome')}
                title="Back"
                color="#32a882"
              />
            </View >
        
              </View >
       </View>

                  
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    
  },

  
buttons:{

  alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
   marginTop:10,
},

buttonsback:{

  alignContent:"center",
 marginLeft:20,
 marginRight:20,
 height: 40,
 marginTop:10,
 marginBottom:50,
 
},
buttonsback1:{

    alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
   marginTop:150,
   marginBottom:50,
   
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
 
  marginBottom:40,
 textAlign:"center",


},
});
