import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBnXEKZWJXBhseDFJeugdBEhge7UPslbas",
  authDomain: "netflix-51215.firebaseapp.com",
  projectId: "netflix-51215",
  storageBucket: "netflix-51215.firebasestorage.app",
  messagingSenderId: "706498786310",
  appId: "1:706498786310:web:0db66c984b28c488edff87",
  measurementId: "G-WSMH20NV7D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
