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
import Surgery_docter from './page/Surgery_docter.js';
import Ninthpage from './page/selecter.js';
import Tenthpage from './page/word_docter.js';
import Select_derector from './page/direct_check.js';
import Anesthesiologist_Select from './page/Anesthesiologist_Select.js';
import surgery_select from './page/surgery_select.js';
import Nursing_Check from './page/Nursing_Check.js';
import Director_Rejects from './page/Director_Rejects.js';
import Edit_Director_Reject from './page/Edit_Director_Reject.js';
import Ane_Rejects from './page/Ane_Rejects.js';

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
    Surgery_Doctor: { screen: Surgery_docter },
    Select: { screen:  Ninthpage },
    word_docter: { screen: Tenthpage },
    Select_derector: { screen:Select_derector },
    Anesthesiologist_Select: { screen:Anesthesiologist_Select },
    surgery_select: { screen:surgery_select },
    Nursing_Check: { screen:Nursing_Check },
    Director_Rejects: { screen:Director_Rejects },
    Edit_Director_Reject: { screen:Edit_Director_Reject },
    Ane_Rejects: { screen:Ane_Rejects },
  },
 // {
   // initialRouteName: 'FirstPag',
 // }

);
export default createAppContainer(App);