// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5TM1O1F1T49UKMbUG0nI7k19FHk6Cvr0",
  authDomain: "mentor-app-238c6.firebaseapp.com",
  projectId: "mentor-app-238c6",
  storageBucket: "mentor-app-238c6.firebasestorage.app",
  messagingSenderId: "943754909900",
  appId: "1:943754909900:web:cef25346ffae73d2e20a69",
  measurementId: "G-8T3CMHE740"
};

// Initialize Firebase with error handling
try {
  // Check if Firebase has already been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    console.log('Firebase initialized successfully');
  }
  
  // Initialize services
  const analytics = firebase.analytics();
  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  
  // Make services available globally
  window.db = db;
  window.auth = auth;
  window.storage = storage;
  window.analytics = analytics;
  
} catch (error) {
  console.error('Error initializing Firebase:', error);
}
