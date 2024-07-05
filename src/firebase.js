import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAZwXVCtJRlbtFInWZ7uoTFuNduY_YjMxE",
    authDomain: "nft-bstudy.firebaseapp.com",
    projectId: "nft-bstudy",
    storageBucket: "nft-bstudy.appspot.com",
    messagingSenderId: "829825040952",
    appId: "1:829825040952:web:1d7361ccd523bbe27bdccd",
    measurementId: "G-QMQ7TZXWFJ"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };