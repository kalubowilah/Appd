
import React,{Component} from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, ImageBackground, Button,ScrollView, Alert} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default class log extends React.Component {

  GetValueFunctionX = () =>{
    return console.log(1)
    return fetch('http://192.168.1.101/CSTH_PHP/show_all.php')
    .then((response) => response.json())
    .then((responseJson) => {
      
      console.log(responseJson);
      // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      // this.setState({
      //   isLoading: false,
      //   dataSource: ds.cloneWithRows(responseJson),
      // }, function() {
      //   // In this block you can do something with new state.
      // });
    })
    .catch((error) => {
      console.error(error);
    });
   
  }
 
  constructor(props) {
 
    super(props)
 
    this.state = {
      position:'',
      email: '',
      password:'',
      user_id: '',
    }
 
  }
 
  GetValueFunction = () =>{
    // return console.log(this.state.email, this.state.password, this.state.position)
 
//  const {position}  = this.state.position ;
//  return console.log(position)

fetch('http://192.168.1.101/CSTH_PHP/log_user.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: this.state.email,
      password: this.state.password,
      position: this.state.position,
    })
  
  }).then((response) => response.json())
        .then((responseJson) => {
  
           console.log(responseJson.user_id)
           this.setState({user_id : responseJson.user_id})

          // return console.log(positionJSON)

          switch(responseJson.position) {
  case 'Ward_doctors':
    this.props.navigation.push('Addpatien');
    break;
  case 'Director':
    this.props.navigation.push('Director');
    break;
    case 'Anesthesiologist Doctor':
      this.props.navigation.push('Anesthesiologist_Doctor');
      break;
      case 'Surgery Doctor':
     this.props.navigation.push('Surgery_Doctor');
      break;
      case 'Medical Officer':
        this.props.navigation.push('Select');
        break;
        case 'Nursing Staff':
          this.props.navigation.push('Nursing');
          break;
          default:
            Alert.alert("Invalid Credentials");
          }
          //Alert.alert(position);
          //this.props.navigation.push('Registration');

  
        }).catch((error) => {
           console.error(error, 'error');
        })

    }



  render(){
    const { navigate } = this.props.navigation;


    return (
      <ScrollView>  
      <View style={styles.container}>

       <Text style={styles.inputTexttopic}>WOC</Text> 
       <Text style={styles.inputTexttopic1}>- Colombo South Teaching Hospital -</Text> 
   


       <Text style={styles.inputText}>Select your position:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            // {label: 'Select', value: 'Select',  hidden: true},
                            {label: 'Director', value: 'Director'},
                            {label: 'Medical Officer', value: 'Medical Officer' },
                            {label: 'Anesthesiologist Doctor', value: 'Anesthesiologist Doctor'},
                            {label: 'surgery Doctor', value: 'surgery Doctor'},
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
                          onChangeItem={item=> this.setState({position:item.value})}
                         
                     >
             </DropDownPicker>
             </View>



                       <Text style={styles.inputText}>Enter your email :</Text>
                          <View style={styles. inputs} >
                               <TextInput  
                                     style={styles.inputText1}
                                        placeholder="Enter Your Email" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={emailInput => this.setState({email: emailInput})}
                              />
                        
                          </View>

                         <Text style={styles.inputText}>Password :</Text>
                         <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Your Password" 
                                        secureTextEntry={true}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={passwordInput => this.setState({password: passwordInput})}
                              />
                         </View>


                         <View style={styles.buttons}>
                                                <Button 
                                                title="Login"
                                                color="#32a882" 
                                             //   onPress={() =>navigate('Anesthesiologist_Doctor')} 
                                             onPress={this.GetValueFunction}
                                                />
                        </View>

               <TouchableOpacity>
                    <Text style={styles.forgot1}
                    onPress={() =>navigate('Addpatien')} 
                    >Forgot Password?
                         </Text>
               </TouchableOpacity>
              
                    
               <View style={styles.buttons}>  
               <Button 
                       onPress={() =>navigate('Registration')}
                       title="Signup"
                       color="#32a882" 
                       
              />
              </View>
             
      </View>
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
  
  forgot:{
    color:"white",
    fontSize:11,
    paddingBottom:10.0,
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
  inputs:{
    borderBottomWidth: 1,
    borderColor:'#777',
   marginRight:20,
    marginLeft:20,
    marginBottom:20,
    fontWeight: "bold",
  },
  buttons:{

    alignContent:"center",
   marginLeft:20,
   marginRight:20,
   height: 40,
  },
  inputTexttopic:{
    fontWeight: "bold",
    color:"black",
    fontSize: 45,
    marginTop:5,
    
   textAlign:"center",
  },
  inputTexttopic1:{
    fontWeight: "bold",
    color:"black",
    fontSize: 18,
    marginBottom:110,
   textAlign:"center",
  },
  forgot1:{
    fontWeight: "bold",
    color:"black",
   textAlign:"center",
   marginBottom:15,
   marginTop:15,
  },

  picker1:{
    alignContent:"center",
    marginLeft:20,
    marginRight:20,
    height: 40,
    marginBottom:10,
    
  }
  
});
