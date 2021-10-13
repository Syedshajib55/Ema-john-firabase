import { useState } from "react"
import { getAuth, signOut, onAuthStateChange, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";

const useFirebase = () =>{
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(res =>{
            const user = res.user;
        })
    }
    const logOut = ()=>{
        signOut(auth)
        .then(()=>{
            setUser({})

        })
    }
    useEffect(auth, (user) => {
        if (user) {
            setUser(user);
          } else {
          }
    }, [])

    return{
        user,
        signInUsingGoogle,
        logOut,
    }
}
export default useFirebase;