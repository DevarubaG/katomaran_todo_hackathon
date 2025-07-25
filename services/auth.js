// services/auth.js
import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { getAuth, signInWithCredential, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";

WebBrowser.maybeCompleteAuthSession();

export function useGoogleSignIn() {
  const [user, setUser] = useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "431576034301-mp1d2ifaq5a9hfgo7juktk7tibsnk0gf.apps.googleusercontent.com",
  });

  const auth = getAuth(app);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential).catch(console.error);
    }
  }, [response]);

  return [request, response, promptAsync, user];
}
