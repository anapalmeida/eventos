import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCMZdoZ5D06tlHVP_v_m7ug8oZOS-BNhKI",
    authDomain: "eventos-c70fa.firebaseapp.com",
    projectId: "eventos-c70fa",
    storageBucket: "eventos-c70fa.appspot.com",
    messagingSenderId: "991764612566",
    appId: "1:991764612566:web:ff968647f4f3c115d79077"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);