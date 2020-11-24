import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, ImageBackground, Image, ScrollView, TextField, Reinput, Button } from 'react-native';
import DatePicker from 'react-native-datepicker'



export default class  Select_derector extends React.Component {
  constructor(props){
    super(props)
    this.state= {date:"2016-05-15"}
  }
   
  render() {
    const { navigate } = this.props.navigation;
   
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>

            <Text style={styles.inputTexttopic}>Colombo South Teaching Hospital</Text>
            <Text style={styles.inputTexttopic1}>- Kalubowila -</Text>

            <Text style={styles.inputText}>Select Date :</Text>
            <View style={styles.inputs} >
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
                 onDateChange={(date) => {this.setState({date: date})}}
           />

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
  picker1: {
    alignContent: "center",
    marginLeft: 20,
    marginRight: 20,
    height: 40,
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
  redio1: {


    borderColor: '#777',
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
});
