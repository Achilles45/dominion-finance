import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA33c3DqApCuOp1JULPhHrdN1UCkfbAZA0",
  authDomain: "dynamic-investment.firebaseapp.com",
  databaseURL: "https://dynamic-investment.firebaseio.com",
  projectId: "dynamic-investment",
  storageBucket: "dynamic-investment.appspot.com",
  messagingSenderId: "1081059840115",
  appId: "1:1081059840115:web:c4bfac151aa5f9bcc41a06",
  measurementId: "G-73WQG4KX5T"
};
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();