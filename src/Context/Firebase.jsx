import { initializeApp } from "firebase/app";
import { createContext, useContext } from 'react'
const firebaseConfig = {
    apiKey: "AIzaSyDtxpNm4b1JrEj9iOa9l4migIT7zkh0S34",
    authDomain: "task-management-d5d6b.firebaseapp.com",
    projectId: "task-management-d5d6b",
    storageBucket: "task-management-d5d6b.firebasestorage.app",
    messagingSenderId: "360271063899",
    appId: "1:360271063899:web:919c158f4c3bcb6880487e",
    databaseURL: "https://console.firebase.google.com/project/task-management-d5d6b/database/task-management-d5d6b-default-rtdb/data/~2F"
};

const firebaseApp = initializeApp(firebaseConfig);

const context = createContext(null)