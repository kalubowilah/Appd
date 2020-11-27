import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button,TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';

export default class  Select_derector extends React.Component {
  state = {
    names: [
       {
          id: 0,
          name: '5566562306565332',
       },
       {
          id: 1,
          name: 'Susan',
       },
      
    ]
 }
 alertItemName = (item) => {
    alert(item.name)
 }
   
  render() {
    const { navigate } = this.props.navigation;
   
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text>
            <Text style={styles.inputTexttopic1}>- Kalubowila -</Text>

            <Text style={styles.inputText}>Select B.H.T. number :</Text>
            <View style={styles.list}> 
            {
               this.state.names.map((item, index) => (
                <View >
                  <View style={styles.inputlist}  >
                  <Text style={styles.input} 
                     key = {item.id}
                    
                    >
                    {item.name}
                    </Text>
                               <View style={styles.buttonlist}>
                                <Button 
                                    onPress = {() => this.alertItemName(item)}
                                    title="OK"
                                    color="#32a882"
                                />
                               </View >
                      
                              
                    </View >
                         
                  </View>
               ))
               
            }
      
             </View>
            <View style={styles.buttonsback}>
              <Button
                
                title="OK"
                color="#32a882"
              />
            </View >
 

            <View style={styles.buttonsback}>
              <Button
                onPress={() => navigate('Welcome')}
                title="Back"
                color="#32a882"
              />
            </View >
 
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',

  },
  inputs: {
    borderBottomWidth: 1,
    borderColor: '#777',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
   // justifyContent: 'center',

  },
  inputlist: {
    borderWidth: 2,
    borderColor: '#777',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",
    justifyContent: 'center',
   
  },
  inputText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 17,
    marginLeft: 20,
  },
  inputText1: {
    fontWeight: "bold",
    color: "green",
    fontSize: 16,

  },
  buttons: {

    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    marginTop: 40,
  },

  buttonsback: {

    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    marginTop: 10,
    marginBottom: 50,

  },
  buttonlist: {
   
   marginLeft:200 ,
   // marginRight: 20,
  //  height: 40,
    width:50,
    justifyContent: 'center',
  },
  inputTexttopic: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,
    marginTop: 25,

    textAlign: "center",
  },
  inputTexttopic1: {
    fontWeight: "bold",
    color: "black",
    fontSize: 22,

    marginBottom: 40,
    textAlign: "center",


  },
  list: {
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 200,
    marginBottom: 10,
    marginTop: 5,
    
  },
  Subtopic: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginLeft: 20,
    textDecorationLine: 'underline',
    marginBottom: 20,
    marginTop: 20
  },
  inputsview: {

    borderColor: '#777',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  
});
