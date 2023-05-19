// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import Header from '../components/Header'

// const PrivateRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => (
//     <Route {...rest} component={(props) => (
//         isAuthenticated ? (
//             <div>
//                 <Header />
//                 <Component {...props} />
//             </div>
//         ) : (
//             <Navigate to="/" />
//         )
//     )} />
// );

// export default PrivateRoute