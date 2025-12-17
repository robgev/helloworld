import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HelloPage from './pages/HelloPage';
const App = () => (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Navigate, { to: "/hello", replace: true }) }), _jsx(Route, { path: "/hello", element: _jsx(HelloPage, {}) })] }) }));
export default App;
