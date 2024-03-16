import { useState } from "react";

export const LoginPage = ({ dispatch }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = () => {
    //TODO
    //Call Axios
    async function postUserData(data: { email: string; password: string }) {
      try {
        const res = await fetch("api endpoint", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("response from API is not ok");
        const response = await res.json();
        dispatch({
          type: "LOGIN",
          payload: {
            userId: response.data.userId,
            role: response.data.role,
            token: response.data.token,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
    postUserData({ email, password });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="email" onChange={() => handleEmailChange} value={email} />
        <input
          type="password"
          name=""
          id=""
          onChange={() => handlePasswordChange}
          value={password}
        />
      </form>
    </div>
  );
};
