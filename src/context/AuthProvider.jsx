import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import AuthContext from "./AuthContext";
import auth from "../firebase/firebase.config";


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(user)
  // Create new user with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email & password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with Google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Update user profile (name, photo)
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Track auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  // All values to share
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    updateUserProfile,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;