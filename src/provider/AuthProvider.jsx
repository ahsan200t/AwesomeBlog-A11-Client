/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";


// Social Auth Provider
const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (fullName, photoURL, email) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: photoURL,
      email: email,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        setUser(user);
      }else{
        setUser(false)
      }
    });
    return () => unSubscribe();
  }, [user]);

  //   Google Login

  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = async() => {
    setLoading(true)
   const {data}= await axios("https://awesome-blog-steel.vercel.app/logout", {withCredentials:true})
   console.log(data)
   setUser(false)
    return signOut(auth);
   
  };
  const userInfo = {
    googleLogIn,
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;