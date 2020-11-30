import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button, ToastAndroid,  Alert } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { log } from 'react-native-reanimated';
import DatePicker from 'react-native-datepicker'


export default class Director extends React.Component {


  constructor(props) {
 
    super(props)
    // console.log(this.props.navigation.state.params.id);
    this.getRecord = this.getRecord.bind(this)
 
    this.state = {
      position:'',
      status: '',
      id: this.props.navigation.state.params.id,
      
    }
 
  }

  componentDidMount(){
    this.getRecord()
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


    // if(
    //   this.state.PatientName === '' 
    // )  {
    //   return Alert.alert('Please fill Patient Name')
    // }
  
    // // if(
    // //   this.state.PatientAllergies === ''
    // //   ){
    // //   return Alert.alert('Fill the allergies of the patient')
    // // }
  
    // if(
    //   this.state.PatientBht=== ''  ||
    //   this.state.PatientWard=== ''  ||
    //   this.state.PatientDoctor=== ''  ||
    //   this.state.PatientTheater=== ''  ||
    //   this.state.PatientTime=== ''  ||
    //   this.state.PatientType=== ''  ||
    //   this.state.PatientDate=== ''  ||
    //   this.state.PatientNote=== ''
    // )  {
      // return Alert.alert('Please fill all surgery information')
    // }

   
   
    fetch('http://192.168.1.101/CSTH_PHP/edit_patient.php', {
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
        ward: this.state.ward,
        note: this.state.note,
        id: this.props.navigation.state.params.id,
        status: "PENDING",
        // id: 17
    
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
        updated_at: responseJson.updated_at,
      })
      // console.log(this.state.doctor + ' doc');
  
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

       
     <Text style={styles.inputTexttopic}>Admission of patients</Text> 
     <Text style={styles.inputTexttopic1}>- Kalubowila -</Text> 

           <Text style={styles.Subtopic}> Admission information </Text> 
           <Text style={styles.inputText}>Entered Date & Time :</Text>
            <View style={styles.inputsview} >
              <Text
                style={styles.inputText1}
              >{this.state.updated_at}</Text>
            </View>


               <Text style={styles.Subtopic}>Patient information </Text> 

               <Text style={styles.inputText}>Patient name :</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Patient Name" 
                                        defaultValue={this.state.name}
                                      placeholderTextColor="#DCDCDC"
                                     onChangeText={input => this.setState({name:input})}
                            />
                      
               </View>

               <Text style={styles.inputText}>Patient age (years) :</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Patient Age" 
                                      defaultValue={this.state.age}
                                      placeholderTextColor="#DCDCDC"
                                     onChangeText={input => this.setState({age:input})}
                            />
                      
               </View>

               <Text style={styles.inputText}>Patient address:</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Patient Address" 
                                      defaultValue={this.state.address}
                                      placeholderTextColor="#DCDCDC"
                                     onChangeText={input => this.setState({address:input})}
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
                     defaultValue={this.state.sex}
                     containerStyle={{height: 40}}
                     style={styles.inputText1}
                     style={{backgroundColor: '#fafafa'}}
                     itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                        sex: item.value
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
                     defaultValue={this.state.allergies}
                     containerStyle={{height: 40}}
                     style={styles.inputText1}
                     style={{backgroundColor: '#fafafa'}}
                     itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                        allergies: item.value
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
                                      defaultValue={this.state.bht}
                                      placeholderTextColor="#DCDCDC"
                                      onChangeText={text => this.setState({bht:text})}
                            />
                      
               </View>

               <Text style={styles.inputText}>Ward</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Ward Number" 
                                      defaultValue={this.state.ward}
                                      placeholderTextColor="#DCDCDC"
                                      onChangeText={text => this.setState({ward:text})}
                            />
                      
               </View>
                      
               <Text style={styles.inputText}>Surgery Doctor name :</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Surgery Doctor Name" 
                                      defaultValue={this.state.doctor}
                                      placeholderTextColor="#DCDCDC"
                                      onChangeText={input => this.setState({doctor:input})}
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
                     defaultValue={this.state.theater}
                     containerStyle={{height: 40}}
                     style={styles.inputText1}
                     style={{backgroundColor: '#fafafa'}}
                     itemStyle={{
                     justifyContent: 'flex-start'
                  }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => this.setState({
                        theater: item.value
                  })}
                   >
           </DropDownPicker>
           </View>

           <Text style={styles.inputText}>Surgery time (H):</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Surgery Time" 
                                      defaultValue={this.state.time}
                                      placeholderTextColor="#DCDCDC"
                                      onChangeText={input => this.setState({time:input})}
                                      
                            />
                      
               </View>
               <Text style={styles.inputText}>Surgery type:</Text>
               <View style={styles. inputs} >
                             <TextInput  
                                      style={styles.inputText1}
                                      placeholder="Enter Surgery Type"
                                      defaultValue={this.state.type}
                                      placeholderTextColor="#DCDCDC"
                                      onChangeText={input => this.setState({type:input})}
                                      
                            />
                      
               </View>

               <Text style={styles.inputText}>Surgery date (Y/M/D):</Text>
               <View style={styles. inputs} >
                        
               <DatePicker 
     

     date={this.state.date}
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
  onDateChange={(input) => {this.setState({date: input})}}
  // onChangeText={input => this.setState({date:input})}
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
                                      defaultValue={this.state.note}
                                     onChangeText={input => this.setState({note:input})}
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
