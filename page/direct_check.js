import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button,TouchableOpacity} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { log } from 'react-native-reanimated';

export default class  Select_derector extends React.Component {

  

 alertItemName = (item) => {
    alert(item)
 }

 pushNext = (id) => {
  //  alert(id)
  this.props.navigation.push('Director' , {id}); 
 }


  constructor(props){
   super(props)
   console.log(1);
   this.state = {
     names: []
   }
   this.getPatients = this.getPatients.bind(this)
    
 }

 componentDidMount() {
   console.log(111);
   this.getPatients()
  
 }

 async getPatients() {
  fetch('http://192.168.1.101/CSTH_PHP/show_all.php', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },

  })
  .then((response) => response.json())
  .then((responseJson) => {
    // console.log(responseJson);
    this.setState({names: responseJson})

  })
  .catch((err) => {
    console.log(err);
    console.log('err');
  })
 }


 renderLoading(){

   return (
    <View><Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text></View>
   )
 }
   
  render() {
    const { navigate } = this.props.navigation;
    {this.retrieveData}
    
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
                    {/* {item.id} */}
                    New Operation Request
                    </Text>
                               <View style={styles.buttonlist}>
                                <Button 
                                    onPress = {() => this.pushNext(item.id)}
                                    title="View"
                                    color="#32a882"
                                />
                               </View >
                      
                              
                    </View >
                         
                  </View>
               ))
               
            }
      
             </View>
            
 
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
