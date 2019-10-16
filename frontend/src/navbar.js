import React, { useEffect } from "react";
import { useAuth0 } from "./auth0";

export default function() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin
    });

  useEffect(() => {
    if (!user) {
      return;
    } else {
      alert("there is a user");
      console.log(user);
    }
  }, [user]);
  return (
    <div>
      <h1>The navbar</h1>
      {isAuthenticated ? (
        <button onClick={() => logoutWithRedirect()}>Sign out</button>
      ) : (
        <button onClick={() => loginWithRedirect({})}>Sign in</button>
      )}
    </div>
  );
}
