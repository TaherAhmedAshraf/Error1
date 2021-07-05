import React from "react";
import { FcGoogle } from "react-icons/fc";
import { firebase, useAuthState } from "../DB/Firebase";

export default function SignIn() {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  // const analytics = firebase.analytics();

  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  const logOut = () => {
    auth.signOut().then(() => {
      console.log("Done");
    });
  };

  const apply = async () => {
    firestore.collection("users").doc(user.uid).set({
      Name: user.displayName,
      Email: user.email,
      Photo: user.photoURL,
      Requested: "True",
      Accepted: "False",
      Status: "Pending",
      Role: "Role not found",
    });
    console.log("Done");
  };

  if (user) {
    return (
      <>
        <div className="Sign-In-Page">
          <h1>Login Sucessful</h1>
          <button className="btn-google" onClick={() => logOut()}>
            Log Out
          </button>
          <h4>
            You cant add any data untill you get access from{" "}
            <span className="text-primary">miraclo</span>.
          </h4>
          <button className="btn-google" onClick={() => apply()}>
            Apply for access
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="Sign-In-Page">
        <button onClick={() => signInWithGoogle()} className="btn-google">
          <span className="Icon-Google">
            <FcGoogle />
          </span>
          Sign In with Google
        </button>
      </div>
    </>
  );
}
