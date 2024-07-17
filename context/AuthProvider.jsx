import React, { createContext, useContext, useState, useEffect } from "react";
import { doc, setDoc } from "firebase/firestore";
import { sendPasswordResetEmail } from "firebase/auth";
import { db, FIREBASE_AUTH } from "../lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { router } from "expo-router";
import { getUsername } from "../app/actions";

const AuthContext = createContext();
const auth = FIREBASE_AUTH;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          router.push("/");
        }
      );
    } catch (error) {
      console.log(error.code);
      setAuthError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setAuthError(`Password reset mail is sent to ${email}`);
      });
    } catch (error) {
      console.log(error.code);
      setAuthError(error.code);
    }
  };

  const signUp = async (email, password) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const emailId = userCredential.user.email;
          const userId = userCredential.user.uid;
          const username = getUsername(emailId);
          const userRef = doc(db, "users", userId);
          setDoc(userRef, {
            userName: username,
            userId: userId,
            emailId: emailId,
            planStarts: "",
            planEnds: "",
            devices: 1,
          })
            .then(() => {
              console.log("User data stored successfully");
              router.push("/");
              a;
            })
            .catch((error) => {
              console.error("Error writing user data:", error);
            });
        }
      );
    } catch (error) {
      console.error("Sign up error:", error);
      setAuthError(error.code);
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await FIREBASE_AUTH.signOut();
    } catch (error) {
      console.error("Sign out error:", error);
      setAuthError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const authContextValue = {
    user,
    loading,
    authError,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Use AuthContext in components
export const useAuth = () => useContext(AuthContext);
