import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyRoutes from './routes/PublicRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MyRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
