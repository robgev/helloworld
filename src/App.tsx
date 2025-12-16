import { Navigate, Route, Routes } from 'react-router-dom';
import { HelloWorldPage } from './routes/HelloWorldPage';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/hello" replace />} />
      <Route path="/hello" element={<HelloWorldPage />} />
      <Route path="*" element={<Navigate to="/hello" replace />} />
    </Routes>
  );
}
