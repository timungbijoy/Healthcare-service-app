// InitializeAuthentication.js
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config.js";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
