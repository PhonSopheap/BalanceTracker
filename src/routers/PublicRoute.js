// import React from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';

// export const PublicRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => (
//     <Routes>
//         <Route {...rest} component={(props) => (
//             isAuthenticated ? (
//                 <Navigate to="/dashboard" />

//             ) : (
//                 <Component {...props} />
//             )
//         )} />
//     </Routes>
// );

// export default PublicRoute