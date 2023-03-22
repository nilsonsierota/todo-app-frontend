import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from 'pages';

export const TodoRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
