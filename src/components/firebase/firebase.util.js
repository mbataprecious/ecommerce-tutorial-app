import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCgT6KLAGTKfjnhtnYd_dE5LJe-dwVMlsM",
    authDomain: "ecommerce-597f8.firebaseapp.com",
    databaseURL: "https://ecommerce-597f8.firebaseio.com",
    projectId: "ecommerce-597f8",
    storageBucket: "ecommerce-597f8.appspot.com",
    messagingSenderId: "586064502218",
    appId: "1:586064502218:web:75f7aa8f845ea2d9a8c333"
  };

  firebase.initializeApp(firebaseConfig)

  export const auth=firebase.auth();
  export const fireStore=firebase.firestore()


  export const createUserProfileDocunent= async (UserAuth,additionalData )=> {
      if(!UserAuth)return
      
      const UserRef= await fireStore.doc(`user/${UserAuth.uid}`)
      const snapShot=await UserRef.get();

      if(!snapShot.exists){
        const {displayName,email}=UserAuth
        const createdAt=new Date()

        try {

         UserRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
         }) 
        } 
        catch (error) {
         console.log('error creating User...',error.message)
        }
        
      }


      return UserRef;
  }

  const Provider=new firebase.auth.GoogleAuthProvider()
  Provider.setCustomParameters({prompt:'select_account'})
  export const signinWithGoogle =()=>auth.signInWithPopup(Provider)

  export default firebase;