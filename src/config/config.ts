import * as dotenv from 'dotenv';

dotenv.config();

const FIREBASE_CONFIG = {
	apiKey: 'AIzaSyDXTyIi7XLjQkCm0tlkFAnyqJxWLyFGyQc',
	authDomain: 'ebp-service-back.firebaseapp.com',
	projectId: 'ebp-service-back',
	storageBucket: 'ebp-service-back.appspot.com',
	messagingSenderId: '1093695323562',
	appId: '1:1093695323562:web:1aef79681171b926a1bfd3',
};

const config = {
	firebase: FIREBASE_CONFIG,
};

export default config;
