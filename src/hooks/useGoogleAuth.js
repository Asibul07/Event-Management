// hooks/useGoogleAuth.js

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export function useGoogleAuth() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          resolve(user);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return {
    signInWithGoogle
  };
}
