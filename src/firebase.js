import firebase from 'firebase';
// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

var firebaseConfig = {
	apiKey: 'AIzaSyB45w5xJjo88bLo1LFHwFpLYFiwsxncOms',
	authDomain: 'intro-component-react.firebaseapp.com',
	projectId: 'intro-component-react',
	storageBucket: 'intro-component-react.appspot.com',
	messagingSenderId: '444048278360',
	appId: '1:444048278360:web:df6f07be8e4b111f9f1b2d',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { auth };
export default db;
