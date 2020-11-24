import React from 'react';
import { StyleSheet, Text, View ,TextInput,SafeAreaView, ImageBackground,Image,ScrollView,TextField,Reinput,Button, Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker'


  // redio button allergies 
  var allergies = [
  {label: "Allergies occur.", value: "Allergies occur."},
   {label: "Does not cause allergies.", value: "Does not cause allergies."},
   
  ];

export default class wo_docter extends React.Component {

  constructor(props) {
    super(props)
 
    this.state = {
      PatientName: '',
      PatientAge: '',
      PatientAddress: '',
      PatientSex: '',
      PatientAllergies: '',
      PatientBht: '',
      PatientWard : '',
      PatientDoctor : '',
      PatientTheater : '',
      PatientTime : '',
      PatientType : '',
      PatientDate : '',
      PatientNote : ''
    };
  
   
  }
  componentDidMount() {
    var that = this;

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year + ' ',
      time:
      hours + ':' + min + ':' + sec,
    });
  }

  PatientRegistrationFunction = () =>{

 

    // return console.log(1)

    if(
      this.state.PatientName === '' 
    )  {
      return Alert.alert('Please fill Patient Name')
    }
  
    if(
      this.state.PatientAllergies === ''
      ){
      return Alert.alert('Fill the allergies of the patient')
    }
  
    if(
      this.state.PatientBht=== ''  ||
      this.state.PatientWard=== ''  ||
      this.state.PatientDoctor=== ''  ||
      this.state.PatientTheater=== ''  ||
      this.state.PatientTime=== ''  ||
      this.state.PatientType=== ''  ||
      this.state.PatientDate=== ''  ||
      this.state.PatientNote=== ''
    )  {
      return Alert.alert('Please fill all surgery information')
    }

   
   
    fetch('http://192.168.1.101/CSTH_PHP/register_patient.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
    
        name: this.state.PatientName,
        age: this.state.PatientAge,
        address: this.state.PatientAddress,
        sex: this.state.PatientSex,
        allergies: this.state.PatientAllergies,
        bht: this.state.PatientBht,
        date: this.state.PatientDate,
        doctor: this.state.PatientDoctor,
        theatre: this.state.PatientTheater,
        time: this.state.PatientTime,
        type: this.state.PatientType,
        ward: this.state.PatientWard,
        note: this.state.PatientNote
    
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

  render(){
    const { navigate } = this.props.navigation;
//picker (Allergies)
    this.state2 = {
      allergies: 'Allergies'
  }

  //picker (operation theatri)
  this.state1 = {
    opt: 'Theatre'
}
 //picker (operation theatri)
 this.state3 = {
  Sex: 'Male'
}
this.state4 = {
  Permission: 'Ready to Surgery'
}

    
    return (
      <SafeAreaView>
      <ScrollView>
       <View style={styles.container}>

         
       <Text style={styles.inputTexttopic}>Admisson of patients</Text> 
       <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 

       
      



             <Text style={styles.Subtopic}> Admisson information </Text> 

              <Text style={styles.inputText}>Editer name :</Text> 
                <View style={styles.inputsview} >
                               <Text  
                                     style={styles.inputText1}
                                        placeholder="Name" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              > {this.props.user_id} </Text>
                        
                 </View>

                 {/* <Text style={styles.inputText}>Date :</Text>
                 <View style={styles. inputsview} >
                               <Text 
                                        style={styles.inputText1}
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              >{this.state.date}</Text>
                        
                 </View> */}



                 

                 {/* <Text style={styles.inputText}>Time</Text>
                 <View style={styles. inputsview} >
                               <Text 
                                        style={styles.inputText1}
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({password:text})}
                              >{this.state.time}</Text>
                        
                 </View> */}



                 <Text style={styles.Subtopic}>Patient information </Text> 

                 <Text style={styles.inputText}>Patient name :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Patient Name" 
                                       // keyboardType = 'numeric'
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={name => this.setState({PatientName:name})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Patient age (years) :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Patient Age" 
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={age => this.setState({PatientAge:age})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Patient address:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Patient Address" 
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={address => this.setState({PatientAddress:address})}
                                      multiline={true}
                              />
                        
                 </View>
      
                 <Text style={styles.inputText}>Sex (male / female)</Text>
                 <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Male', value: 'Male',  hidden: true},
                            {label: 'Female', value: 'Female' },
                          
                    ]}
                       defaultValue={this.state. Sex}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientSex: item.value
                    })}
                     >
             </DropDownPicker>
             </View>

                 <Text style={styles.inputText}>Allergies </Text>
                 <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Allergies', value: 'Allergies',  hidden: true},
                            {label: 'Does not cause allergies', value: 'Does not cause allergies' },
                          
                    ]}
                       defaultValue={this.state. allergies}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientAllergies: item.value
                    })}
                     >
             </DropDownPicker>
             </View>


                 <Text style={styles.Subtopic}> Surgery information </Text> 

                 <Text style={styles.inputText}>B.H.T.</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter B.H.T" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={bth => this.setState({PatientBht:bth})}
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Ward</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Ward Number" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={ward => this.setState({PatientWard:ward})}
                              />
                        
                 </View>
                        
                 <Text style={styles.inputText}>Surgery Doctor name :</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Surgery Doctor Name" 
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={doctor => this.setState({PatientDoctor:doctor})}
                              />
                        
                 </View>

   <Text style={styles.inputText}>Select Surgery theatre:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[ 
                            {label: 'Main Operation Theatre', value: 'Main',  hidden: true},
                            {label: 'Operation Theatre A', value: 'A' },
                            {label: 'Operation Theatre B', value: 'B'},
                            {label: 'Operation Theatre C', value: 'C'},
                            {label: 'Operation Theatre - Accident Service', value: 'Accident'},
                    ]}
                       defaultValue={this.state.opt}
                       containerStyle={{height: 40}}
                       style={styles.inputText1}
                       style={{backgroundColor: '#fafafa'}}
                       itemStyle={{
                       justifyContent: 'flex-start'
                    }}
                          dropDownStyle={{backgroundColor: '#fafafa'}}
                          onChangeItem={item => this.setState({
                          PatientTheater: item.value
                    })}
                     >
             </DropDownPicker>
             </View>

             <Text style={styles.inputText}>Surgery time (H):</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Surgery Time" 
                                       
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({PatientTime:text})}
                                        
                              />
                        
                 </View>
                 <Text style={styles.inputText}>Surgery type:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Surgery Type"
                                        placeholderTextColor="#DCDCDC"
                                        onChangeText={text => this.setState({PatientType:text})}
                                        
                              />
                        
                 </View>

                 <Text style={styles.inputText}>Surgery date (Y/M/D):</Text>
                 <View style={styles. inputs} >
                          
                 <DatePicker 
       
       date={this.state.date1}
           mode="date"
         placeholder="select date"
       format="YYYY-MM-DD"
       minDate="2019-05-01"
      maxDate="2030-06-01"
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
     customStyles={{

       dateIcon: {
      position: 'absolute',
      left: 0,
        top: 4,
      marginLeft: 0
  },
     dateInput: {

        borderWidth:0,
     }

   }}
    onDateChange={(date) => {this.setState({date1: date})}}
    onChangeText={date => this.setState({PatientDate:date})}
/>
                                      
                                        
                              
                        
                 </View>

                 {/* <Text style={styles.inputText}>Add your Permission:</Text>
         <View style={styles.picker1}> 
            <DropDownPicker
                       items={[                          
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
             </View> */}

             <Text style={styles.inputText}>Note:</Text>
                 <View style={styles. inputs} >
                               <TextInput  
                                        style={styles.inputText1}
                                        placeholder="Enter Your Note About This Patient"
                                        placeholderTextColor="#DCDCDC"
                                       onChangeText={text => this.setState({PatientNote:text})}
                                      multiline={true}
                              />
                        
                 </View>

                 <View style={styles.buttons}>
                       <Button
                        title="Submit"
                        onPress={this.PatientRegistrationFunction}
                         color="#32a882" 
                         
                      />
                   </View>

                   <View style={styles.buttonsback}>
               <Button 
                       onPress={() =>navigate('Select')}
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
},
Subtopic:{
  fontWeight: "bold",
  color:"black",
  fontSize: 20,
  marginLeft:20,
  textDecorationLine: 'underline',
  marginBottom:20,
  marginTop:20
},
inputsview:{
 
  borderColor:'#777',
 marginRight:20,
  marginLeft:20,
  marginBottom:15,
  fontWeight: "bold",
},
redio1:{
  
  
    borderColor:'#777',
   marginRight:40,
    marginLeft:40,
    marginBottom:20,
    fontWeight: "bold",
},
});
