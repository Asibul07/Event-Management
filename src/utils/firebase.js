import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAf2KlTBOwFQ5EtP6GN8X1FN3U57Fr1tLk",
    authDomain: "event-management-b7717.firebaseapp.com",
    projectId: "event-management-b7717",
    storageBucket: "event-management-b7717.appspot.com",
    messagingSenderId: "284899967130",
    appId: "1:284899967130:web:974d6d9252f74af9a15f23"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

// Define your logic to get event service details
const getEventServiceDetail = async (id) => {
  // Assuming you have a "services" collection in your Firestore
  const serviceRef = firestore.collection("services").doc(id);
  const doc = await serviceRef.get();
  if (doc.exists) {
    return doc.data();
  } else {
    return null;
  }
};

export { getEventServiceDetail, firestore };
export default firebase;