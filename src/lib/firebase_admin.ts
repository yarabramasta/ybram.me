import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(
    <object>JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_CRED)
  )
});

export default admin;
