// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAf_qi34e6LkOosfBGjUZW0AbkXY6ZssWE",
  authDomain: "katomaran-todo-hackathon.firebaseapp.com",
  projectId: "katomaran-todo-hackathon",
  storageBucket: "katomaran-todo-hackathon.firebasestorage.app",
  messagingSenderId: "431576034301",
  appId: "1:431576034301:android:22c381e5887fe8ab888794"
};

export const app = initializeApp(firebaseConfig);
