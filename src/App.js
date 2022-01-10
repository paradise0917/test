import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ScreenA } from './screen/ScreenA';
import { ScreenB } from './screen/ScreenB';
import { Home } from './screen/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/screenA' element={<ScreenA />} />
        <Route path='/screenB' element={<ScreenB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
