import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9vSh7CahmiUe7CFOAdYWlViH3kj-KBv0",
  authDomain: "portfolio-baaec.firebaseapp.com",
  projectId: "portfolio-baaec",
  storageBucket: "portfolio-baaec.appspot.com",
  messagingSenderId: "390487997703",
  appId: "1:390487997703:web:584f5467ee015418f899a2",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
