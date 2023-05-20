import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import AddIncomePage from '../components/AddIncomePage';
import EditExpensePage from '../components/EditExpensePage';
import DashboardPage from '../components/ExpanseDashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LandingPage from '../components/LandingPage';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// import PrivateRoute from './PrivateRoute'

const AppRouter = () => (
    <Routes>
        < Route path="/" element={<LandingPage />} />
        < Route path="/signin" element={<SignIn />} />
        < Route path="/signup" element={<SignUp />} />
        <Route
            path="/dashboard/*"
            element={<DashboardPage />}
        />
        <Route
            path="/create/expense"
            element={<AddExpensePage />}
        />
        <Route
            path="/create/income"
            element={<AddIncomePage />}
        />
        <Route
            path="/edit/:id"
            element={<EditExpensePage />}
        />
        <Route path="*" element={<NotFoundPage />} />
    </Routes>
);

export default AppRouter;