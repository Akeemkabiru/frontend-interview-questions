import { createContext, useContext, useReducer } from "react";

//Provider
export const AuthContext = createContext({});
const initialState = {
  token: localStorage.getItem("site"),
  userId: 0,
  role: "",
};

const reducer = (
  state: { token: string; userId: number; role: string },
  action: {
    type: string;
    payload: {
      userId: number;
      role: string;
      token: string;
    };
  }
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: localStorage.setItem("site", action.payload.token),
        userId: action.payload.userId,
        role: action.payload.role,
      };
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
