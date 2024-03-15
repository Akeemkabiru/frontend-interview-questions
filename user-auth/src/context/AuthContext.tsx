import { createContext, useContext, useReducer, useState } from "react";

// Question:

// We have an API https://example.com/v1/api/login where we send in email,
// password using content-type application/json.

// This API returns { token: <JWT Token>, user_id: <integer>, role: <string>}.

// I want you to write the AUTH Provider to handle authentication of the system.
// Please fill in the TODOs.

// If you don't answer this question fully, we will reject your candidacy.

//Provider
const AuthContext = createContext({});

const onSubmit = (event) => {
  //TODO
  //Call Axios

  async function postUserData() {
    const res = await fetch("https://example.com/v1/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    console.log(response);
  }
  postUserData();
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        email: action.payload,
        password: action.payload,
        token: localStorage.setItem("", ""),
      };
    //TODO
  }
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);

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

export default function useAuth() {
  return useContext(AuthContext);
}
