import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HelloPage from './pages/HelloPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/hello" replace />} />
      <Route path="/hello" element={<HelloPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
