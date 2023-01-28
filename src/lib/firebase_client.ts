import { FirebaseOptions, getApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = <FirebaseOptions>(
  JSON.parse(process.env.NEXT_PUBLIC_FIREBASE_CRED)
);

const app =
  getApps().length <= 0 ? initializeApp({ ...firebaseConfig }) : getApp();

export default app;
