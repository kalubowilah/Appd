import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView, ImageBackground,Image,ScrollView,TextField,Reinput,Button,Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';


export default class Project extends React.Component  {
 
constructor() {
 
    super()
 
    this.state = {
 
      // UserName: '',
      // UserEmail: '',
      // UserPassword: ''
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      UserNic: '',
      UserRegNo: '',
      UserPosition: '',
      UserPhone: '',
      ConfirmPassword: ''

    }
 
  }

  // check_validation() {
  //   this.validate({
  //     // name: {minlength:3, maxlength:7, required: true},
  //     // email: {email: true},
  //     // number: {numbers: true},
  //     // date: {date: 'YYYY-MM-DD'},
  //     ConfirmPassword : {equalPassword : this.state.UserPassword}
  //   });

  //   return console.log(1)
  // }
 
UserRegistrationFunction = () =>{

 

  // return console.log(this.state.UserPassword.length)
  if(
    this.state.UserName === '' ||
    this.state.UserNic === '' ||
    this.state.UserEmail === '' ||
    this.state.UserRegNo === '' ||
    this.state.UserPhone === '' ||
    this.state.UserPosition=== ''  
  )  {
    return Alert.alert('Please fill all fields')
  }

  if(this.state.UserPassword.length < 6){
    return Alert.alert("Password should be 6 characters minimum")
  }


  var pattern = /^([0-9]{9}[X|V]|[0-9]{12})$/gm
  if(!this.state.UserNic.match(pattern)){
    return Alert.alert("Invalid NIC")
  }
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gm;
  if(!this.state.UserEmail.match(emailPattern)){
    return Alert.alert("Invalid Email")
  }

  if(this.state.UserPhone.length !== 10){
    return Alert.alert("Invalid Phone Number")
  }

  if(this.state.ConfirmPassword !== this.state.UserPassword){
    return Alert.alert('Passwords don\'t match')
  }

 
 
  fetch('http://192.168.1.101/CSTH_PHP/register_user.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
  
      name: this.state.UserName,
      email: this.state.UserEmail,
      password: this.state.UserPassword,
      nic: this.state.UserNic,
      reg_number: this.state.UserRegNo,
      position: this.state.UserPosition,
      phone: this.state.UserPhone
  
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
          console.log(responseJson)
          return Alert.alert(responseJson.message)
  // Showing response message coming from server after inserting records.
          // Alert.alert(responseJson);
  
        }).catch((error) => {
          console.error(error);
        });
 
}
 
  render() {
    const { navigate } = this.props.navigation;
    state = {
      language: 'java',

    };

 
//     this.state = {
//       role: 'Director'
//   }
    return (
 
        <SafeAreaView>
        <ScrollView>
<View style={styles.container}>
 
<Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 

  
       <Text style={styles.inputText}>Select your position:</Text>
       <View style={styles.picker1}> 
       <DropDownPicker
       
                       items={[ 
                            {label: 'Director', value: 'Director',  hidden: true},
                            {label: 'Medical Officer', value: 'Medical Officer'},
                            {label: 'Anesthesiologist Doctor', value: 'Anesthesiologist Doctor' },
                            {label: 'Surgery Doctor', value: 'Surgery Doctor'},
                            {label: 'Nursing Staff', value: 'Nursing Staff'},
                    ]}
                       defaultValue={this.state.role}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                            UserPosition: item.value
                    })}
                     >
             </DropDownPicker>
             </View>

        <Text style={styles.inputText}>Enter your name :</Text>
        <View style={styles. inputs} >
        <TextInput
          placeholder="Enter Your Name"
          placeholderTextColor="#DCDCDC"
          onChangeText={name => this.setState({UserName : name})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>

          
          <Text style={styles.inputText}>Your registration number :</Text>
          <View style={styles. inputs} >
        <TextInput
          placeholder="Enter Your Registration Number"
          onChangeText={regno => this.setState({UserRegNo : regno})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>

          <Text style={styles.inputText}>NIC number :</Text>
          <View style={styles. inputs} >
        <TextInput
          placeholder="Enter Your NIC"
          onChangeText={nic => this.setState({UserNic : nic})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>

          <Text style={styles.inputText}>Enter your phone No :</Text>
          <View style={styles. inputs}>
        <TextInput
          keyboardType="numeric"
          placeholder="Enter Your phone Number"
          onChangeText={phone => this.setState({UserPhone : phone})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>
          
          <Text style={styles.inputText}>Email address</Text>
          <View style={styles. inputs} >
        <TextInput
          placeholder="Enter Your Email"
          onChangeText={email => this.setState({UserEmail : email})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View> 

          <Text style={styles.inputText}> Password</Text>
          <View style={styles. inputs} >
        <TextInput
          // ref="UserPassword"
          placeholder="Enter Your Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>

          <Text style={styles.inputText}>Confirm Password</Text>
          <View style={styles. inputs} >
        <TextInput
          // ref="ConfirmPassword"
          onChangeText={password => this.setState({ConfirmPassword : password})}
          placeholder="Enter Your Password Again"
          underlineColorAndroid='transparent'
          style={styles.inputText1}
          />
          </View>
          {/* {this.isFieldInError('ConfirmPassword') && this.getErrorsInField('ConfirmPassword').map(errorMessage => <View><Text>{errorMessage}</Text></View>) } */}
 
        {/* <TextInput
          placeholder="Enter User Password"
          onChangeText={password => this.setState({UserPassword : password})}
          underlineColorAndroid='transparent'
          style={styles.TextInputStyleClass}
          secureTextEntry={true}
          /> */}
 
        {/* <Button title="Click Here To Register" onPress={this.UserRegistrationFunction} color="#2196F3" /> */}
      
        <View style={styles.buttons}>
                       <Button
                        title="Submit"
                        onPress={this.UserRegistrationFunction}
                         color="#32a882" 
                         
                      />
                   </View>

                   <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('Welcome')}
                       title="Back"
                       color="#32a882" 
                       
              />
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
    inputs:{
      borderBottomWidth: 1,
      borderColor:'#777',
     marginRight:20,
      marginLeft:20,
      marginBottom:20,
      fontWeight: "bold",
      
  
    },
    inputText:{
      fontWeight: "bold",
      color:"black",
      fontSize: 17,
      marginLeft:20,
    },
    inputText1:{
      fontWeight: "bold",
      color:"green",
      fontSize: 16,
      
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
  picker1:{
    alignContent:"center",
    marginLeft:20,
    marginRight:20,
    height: 40,
    marginBottom:10,
    marginTop:5,
  }
  });