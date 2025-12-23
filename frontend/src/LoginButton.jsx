import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";

function LoginButton() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });
    const data = await res.json();
    setUser(data.user);
  };
  return (
    <>
      {user ? (
        <button onClick={handleLogout}>{user.email}</button>
      ) : (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={() => console.log("login failed")}
        />
      )}
    </>
  );
}

export default LoginButton;
