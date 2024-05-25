import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComingSoonPage from './pages/home/ComingSoonPage';

/**
 * Manages routing on the client side to different pages
 */
const RoutesHandler = () => {
    let value = process.env.REACT_APP_BASENAME || "/";

    return (
        <Router basename={value}>
            <Routes>
                <Route path="/" element={<ComingSoonPage />} />
            </Routes>
        </Router>
    );
};

export default RoutesHandler;