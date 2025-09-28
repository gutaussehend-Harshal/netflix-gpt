// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCTapINItbUdV-Q3JfcOLfAI3RHbuBHNh8',
  authDomain: 'netflixgpt-39ba1.firebaseapp.com',
  projectId: 'netflixgpt-39ba1',
  storageBucket: 'netflixgpt-39ba1.firebasestorage.app',
  messagingSenderId: '522943560055',
  appId: '1:522943560055:web:f823f5da00c945d77fc972',
  measurementId: 'G-NC9BJJSD9C',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
