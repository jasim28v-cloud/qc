// 🌊 AMTEZ WAVE 2026 - Configuration
// Firebase: gokr-9a513 | Cloudinary: dt0tkbtzw
// ✨ PREMIUM: Parallax + Glass Morphism + Story Rings

const firebaseConfig = {
    apiKey: "AIzaSyBgC7lY6s38gpUxJ1K5uus4dsiX7nh-Su8",
    authDomain: "gokr-9a513.firebaseapp.com",
    databaseURL: "https://gokr-9a513-default-rtdb.firebaseio.com",
    projectId: "gokr-9a513",
    storageBucket: "gokr-9a513.firebasestorage.app",
    messagingSenderId: "462789764832",
    appId: "1:462789764832:web:b4bf72177d2b44ea935285",
    measurementId: "G-5HD77KL2R8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

// Cloudinary Configuration
const CLOUD_NAME = "dt0tkbtzw";
const UPLOAD_PRESET = "xk20_k";

// 🌊 AMTEZ Settings
const ADMIN_EMAILS = ['jasim28v@gmail.com'];
const DICEBEAR_URL = "https://api.dicebear.com/7.x/big-smile/svg";
const COVER_COLORS = [
    "linear-gradient(135deg, #06b6d4, #22d3ee, #67e8f9)",
    "linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)",
    "linear-gradient(135deg, #0e7490, #0891b2, #06b6d4)",
    "linear-gradient(135deg, #155e75, #0e7490, #0891b2)",
    "linear-gradient(135deg, #164e63, #155e75, #0e7490)",
    "linear-gradient(135deg, #06b6d4, #0891b2, #0e7490)"
];

// 🌊 App Info
const APP_NAME = "AMTEZ";
const APP_VERSION = "2026.1";
const PRIMARY_COLOR = "#06b6d4";
const SECONDARY_COLOR = "#22d3ee";

console.log('🌊 %c'+APP_NAME+' v'+APP_VERSION+' Ready ✨', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
