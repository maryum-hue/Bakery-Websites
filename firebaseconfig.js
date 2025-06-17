// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDeYHaeROm_RyeTWTybHgDiLeXSSMHjjfA",
  authDomain: "loginsignup-d75f7.firebaseapp.com",
  projectId: "loginsignup-d75f7",
  storageBucket: "loginsignup-d75f7.appspot.com",
  messagingSenderId: "570064158531",
  appId: "1:570064158531:web:a69489f25286f95d3839f6",
  measurementId: "G-3C7D9VW0LZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
