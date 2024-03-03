import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgIOfM90G9SbpoAVltJ_1az9Moam1ykNg",
  authDomain: "insta-clone-project-2e912.firebaseapp.com",
  projectId: "insta-clone-project-2e912",
  storageBucket: "insta-clone-project-2e912.appspot.com",
  messagingSenderId: "1025536403883",
  appId: "1:1025536403883:web:0f63fa6acccb40d510caee",
  measurementId: "G-QGDCTJBDP6",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
