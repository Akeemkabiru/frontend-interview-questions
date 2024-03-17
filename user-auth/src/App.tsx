// Question:

import { createContext, useReducer, useState } from "react";

// We have an API https://example.com/v1/api/login where we send in email,
// password using content-type application/json.

// This API returns { token: <JWT Token>, user_id: <integer>, role: <string>}.

// I want you to write the AUTH Provider to handle authentication of the system.
// Please fill in the TODOs.

// If you don't answer this question fully, we will reject your candidacy.

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const data = {
    email,
    password,
  };
  const onSubmit = (event) => {
    //TODO
    //Call Axios
    async function loginAction() {
      try {
        const res = await fetch("https://example.com/v1/api/login", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Incorrect Password or Email");
        const response = await res.json();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name=""
          id=""
          onChange={() => handleEmailChange}
          value={email}
        />
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

//Provider
export const AuthContext = createContext();
const initialState = {
  token: "",
  user_id: 0,
  role: "",
};

const reducer = (
  state: { token: string; user_id: number; role: string },
  action
) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        token: action.payload.token,
        user_id: action.payload.user_id,
        role: action.payload.role,
      };
  }
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
