import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcvWdgTUtNKZv9RMvI_hrqf_vXK0Yh1wc",
  authDomain: "medplug-9e806.firebaseapp.com",
  projectId: "medplug-9e806",
  storageBucket: "medplug-9e806.appspot.com",
  messagingSenderId: "212338839776",
  appId: "1:212338839776:web:b311d08137ea0fceefc085"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app 