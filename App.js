//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 

//Import react-navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './page/log';
import SecondPage from './page/singup';
import ThirdPage from './page/foget_password';
import FourthPage from './page/wo_doctor.js';
import FifthPage from './page/director.js';
import SixthPage from './page/nursing.js';
import SeventhPage from './page/anesthesiologist_doctor.js';
import EgithPage from './page/Surgery_docter.js';
import Ninthpage from './page/selecter.js';
import Tenthpage from './page/word_docter.js';
// import check from './page/director_check.js';

//import all the screens we are going to switch 
const App = createStackNavigator({
  //Constant which holds all the screens like index of any d
    Welcome: { screen: FirstPage }, 
    //First entry by default be our first screen if we do not define initialRouteName
    Registration : { screen: SecondPage }, 

    Forgot: { screen: ThirdPage }, 
    Addpatien: { screen: FourthPage }, 
    Director: { screen: FifthPage },
    Nursing: { screen: SixthPage },
    Anesthesiologist_Doctor: { screen: SeventhPage },
    Surgery_Doctor: { screen: EgithPage },
    Select: { screen:  Ninthpage },
    word_docter: { screen: Tenthpage },
    // Patients: { screen: check },
  },
 // {
   // initialRouteName: 'FirstPag',
 // }

);
export default createAppContainer(App);