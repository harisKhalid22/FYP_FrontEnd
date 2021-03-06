import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import FrontPage from './src/screens/FrontPage';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import NewPassword from './src/screens/NewPassword';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import UploadCase from './src/screens/UploadCase';
import UploadCaseDone from './src/screens/UploadCaseDone';
import CompletedCases from './src/screens/CompletedCases';
import ContactUs from './src/screens/ContactUs';
import AboutUs from './src/screens/AboutUs';
import BankForm from './src/screens/BankForm';
import BankFormDone from './src/screens/BankFormDone';
import IndividualCase from './src/screens/IndividualCase';
import IndividualCase1 from './src/screens/IndividualCase1';
import IndividualCase2 from './src/screens/IndividualCase2';
import IndividualCase3 from './src/screens/IndividualCase3';
import IndividualCase4 from './src/screens/IndividualCase4';

const DrawerNavigation = createDrawerNavigator({
  " ": FrontPage,
  Home: Home,
  Donate: Donate,
  "Upload Case": UploadCase,
  "Completed Cases": CompletedCases,
  "About Us": AboutUs,
  "Contact Us": ContactUs,
  Logout: SignIn,

  // FrontPage: FrontPage,
  // IndividualCase: IndividualCase,
  // SignIn: SignIn,
  // SignUp: SignUp,
  // NewPassword: NewPassword,
  // ForgotPassword: ForgotPassword,
  // UploadCaseDone: UploadCaseDone,
  // BankForm: BankForm,
  // BankFormDone: BankFormDone,
});

const StackNavigation = createStackNavigator(
  {   
    DrawerNavigation: {
      screen: DrawerNavigation,
    },    
    Home: Home,

    // FrontPage: {
    //   screen: FrontPage,
    //   navigationOptions: {
    //     headerShown: false
    //   }
    // },

    SignIn: SignIn,
    SignUp: SignUp,
    NewPassword: NewPassword,
    ForgotPassword: ForgotPassword,

    Donate: Donate,
    BankForm: BankForm,
    BankFormDone: BankFormDone,
    UploadCase: UploadCase,
    UploadCaseDone: UploadCaseDone,
    CompletedCases: CompletedCases,
    AboutUs: AboutUs,
    ContactUs: ContactUs,
    IndividualCase4: IndividualCase,
    IndividualCase0: IndividualCase1,
    IndividualCase1: IndividualCase2,
    IndividualCase2: IndividualCase3,  
    IndividualCase3: IndividualCase4,  
  },
  {
    headerMode: 'none',
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'roboto-700': require('./src/assets/fonts/roboto-700.ttf'),
      'roboto-regular': require('./src/assets/fonts/roboto-regular.ttf'),
      'roboto-500': require('./src/assets/fonts/roboto-500.ttf'),
      'helvetica-regular': require('./src/assets/fonts/helvetica-regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;