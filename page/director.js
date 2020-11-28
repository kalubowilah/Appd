import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button, ToastAndroid,  Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { log } from 'react-native-reanimated';


export default class Director extends React.Component {


  constructor(props) {
 
    super(props)
    // console.log(this.props.navigation.state.params.id);
    this.getRecord = this.getRecord.bind(this)
 
    this.state = {
      position:'',
      status: '',
      id: this.props.navigation.state.params.id,
      // doctor:'',    
    }
 
  }

  componentDidMount(){
    this.getRecord()
  }



  async getRecord() {
    // return console.log(this.state.id);
    fetch('http://192.168.1.101/CSTH_PHP/view_single.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id
      })
  
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        // id: responseJson.id,
        doctor: responseJson.doctor,
        created_at: responseJson.created_at,
        name: responseJson.name,
        age: responseJson.age,
        address: responseJson.address,
        sex: responseJson.sex,
        allergies: responseJson.allergies,
        bht: responseJson.bht,
        ward: responseJson.ward,
        doctor: responseJson.doctor,
        type: responseJson.type,
        time: responseJson.time,
        theater: responseJson.theater,
        date: responseJson.date,
        note: responseJson.note,
        created_by: responseJson.created_by,
      })
      // console.log(this.state.doctor + ' doc');
  
    })
    .catch((err) => {
      console.log(err);
      console.log('err');
    })
   }

   setStatus = () => {
      // return console.log(this.state.status);
      fetch('http://192.168.1.101/CSTH_PHP/change_status.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.state.id,
          status: this.state.status
        })
    
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        // this.setState({
        //   // id: responseJson.id,
          
        // })
        // console.log(this.state.doctor + ' doc');
        this.props.navigation.push('Select_derector');
    
      })
      .catch((err) => {
        console.log(err);
        console.log('err');
      })
     
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
                
                onChangeText={text => this.setState({ password: text })}>{this.state.created_by}</Text> 
            </View>

            <Text style={styles.inputText}>Entered Date & Time :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
              >{this.state.created_at}</Text>
            </View>

            <Text style={styles.Subtopic}>Permission to Surgery </Text>
            <Text style={styles.inputText}>Add your Permission:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                           // {label: 'Select', value: 'Select',  hidden: true},
                            {label: 'Ready to Surgery', value: 'READY' },
                            {label: 'Problem to Surgery', value: 'PROBLEM'},
                        
                    ]}
                       defaultValue={this.state.Permission}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item=> this.setState({status:item.value})}
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
                > {this.state.name}</Text>
            </View>

            <Text style={styles.inputText}>Patients age (years) :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
               > {this.state.age}</Text>
            </View>

            <Text style={styles.inputText}>Patients address :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.address}</Text>
            </View>

            <Text style={styles.inputText}>Gender (male / female) :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.sex}</Text>
            </View>

            <Text style={styles.inputText}>Allergies :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.allergies}</Text>
            </View>


            <Text style={styles.Subtopic}>Surgery information </Text>

            <Text style={styles.inputText}>B.H.T. :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.bht}</Text>
            </View>

            <Text style={styles.inputText}>Ward :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.ward}</Text>
            </View>

            <Text style={styles.inputText}>Surgery Doctor name :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.doctor}</Text>
            </View>

            <Text style={styles.inputText}>Surgery type :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.type}</Text>
            </View>

            <Text style={styles.inputText}>Selected Surgery theatre:</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.theater}</Text>
            </View>

            <Text style={styles.inputText}>Surgery time (H):</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.time}</Text>
            </View>

            <Text style={styles.inputText}>Surgery date (D/M/Y):</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
                placeholderTextColor="#DCDCDC"
                onChangeText={text => this.setState({ password: text })}
                > {this.state.date}</Text>
            </View>


            <View style={styles.buttons}>
              <Button
                title="Submit"
                onPress={this.setStatus}
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
