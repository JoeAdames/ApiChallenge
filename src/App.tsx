import { Routes, Route } from 'react-router-dom'; 
import Login from './pages/LoginPage';
import Search from './pages/SearchPage';

function App() {
  return (
      <Routes>
            <Route path='/' element={<Login />}  />
            <Route path='/search' element={<Search />}  />
      </Routes>
  )
}

export default App
