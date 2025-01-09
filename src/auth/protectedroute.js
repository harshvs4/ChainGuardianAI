// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase-config";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) {
//     return <div>Loading...</div>; // Optional: Add a spinner or loading animation
//   }

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

// export default ProtectedRoute;