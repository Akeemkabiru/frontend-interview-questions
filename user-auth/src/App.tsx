// Question:

// We have an API https://example.com/v1/api/login where we send in email,
// password using content-type application/json.

// This API returns { token: <JWT Token>, user_id: <integer>, role: <string>}.

// I want you to write the AUTH Provider to handle authentication of the system.
// Please fill in the TODOs.

// If you don't answer this question fully, we will reject your candidacy.

// const LoginPage = () => {
//   const [email, setEmail] = userState('');
//   const [password, setPassword] = userState('');

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };
//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const onSubmit = (event) => {
//     //TODO
//     //Call Axios
//   }

//   return (<div>
//   <form onSubmit={onSubmit}>
//   <input type="email" onChange={}
//   </form>
//   </div>);
// });

// //Provider
// export const AuthContext = React.createContext();
// const initialState = {};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN":
//     //TODO
//   }
// };

// const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <AuthContext.Provider
//       value={{
//         state,
//         dispatch,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// }

export default function App() {
  return <div>hello</div>;
}
