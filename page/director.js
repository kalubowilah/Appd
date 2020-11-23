import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button, ToastAndroid,  Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';


export default class Director extends React.Component {


  constructor(props) {
 
    super(props)
 
    this.state = {
      position:'',
    }
 
  }
 
  GetValueFunction = () =>{

    fetch('http://192.168.1.101/CSTH_PHP/director.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: this.state.name,
        age: this.state.age,
        address: this.state.address,
        sex: this.state.sex,
        allergies: this.state.allergies,
        bht: this.state.bht,
        date: this.state.date,
        doctor: this.state.doctor,
        theatre: this.state.theater,
        time: this.state.time,
        type: this.state.type,
        ward: this.state.ward
    
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
           console.log(responseJson.id)
           this.setState({id : responseJson.id})
        })
        

 
 const {position}  = this.state ;

if(position==""){
  Alert.alert("Select your parmission");
}else{
  Alert.alert("Thank DB develop");
}

 
    //this.props.navigation.push('Registration');
  }
  





  render() {
    const { navigate } = this.props.navigation;
    this.state1 = {
      Permission: 'Ready to Surgery'
  }
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>


            <Text style={styles.inputTexttopic}>Admisson of patients</Text>
            <Text style={styles.inputTexttopic1}>- Kalubowila -</Text>


            <Text style={styles.Subtopic}>Admisson information </Text>

            <Text style={styles.inputText}>Docter name :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}/>
            </View>

            <Text style={styles.inputText}>Entered Date :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Entered Time :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>
            <Text style={styles.Subtopic}>Permission to Surgery </Text>
            <Text style={styles.inputText}>Add your Permission:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                           // {label: 'Select', value: 'Select',  hidden: true},
                            {label: 'Ready to Surgery', value: 'Ready to Surgery' },
                            {label: 'Problem to Surgery', value: 'Problem to Surgery'},
                        
                    ]}
                       defaultValue={this.state.Permission}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item=> this.setState({position:item.value})}
                     >
             </DropDownPicker>
             </View>

            <Text style={styles.Subtopic}>Patients information </Text>

            <Text style={styles.inputText}>Patients name :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Patients age (years) :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Patients address :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Gender (male / female) :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Allergies :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>


            <Text style={styles.Subtopic}>Surgery information </Text>

            <Text style={styles.inputText}>B.H.T. :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Ward :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Surgery Doctor name :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Surgery type :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Selected Surgery theatre:</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Surgery time (H):</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>

            <Text style={styles.inputText}>Surgery date (D/M/Y):</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              />
            </View>


            <View style={styles.buttons}>
              <Button
                title="Submit"
                onPress={this.GetValueFunction}
                color="#32a882"
              />
            </View>

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
  /*inputs: {
    borderBottomWidth: 1,
    borderColor: '#777',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    fontWeight: "bold",

  },*/

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
    marginBottom: 20,
    textAlign: "center",
  },

  /*picker1: {
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    marginBottom: 10,
    marginTop: 5,
  },*/

  Subtopic: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
    marginLeft: 20,
    textDecorationLine: 'underline',
    marginBottom: 20,
    marginTop: 10
  },

  inputsview: {
    borderColor: '#777',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },

  picker1: {
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    marginBottom: 10,
    marginTop: 5,
  },
});
