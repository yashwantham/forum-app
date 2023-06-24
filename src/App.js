import logo from './logo.svg';
import './App.css';
import { Topbar } from './components/Topbar';
import { Leftaside } from './components/Leftaside';
import { HomePage } from './pages/HomePage';
import { Rightaside } from './components/Rightaside';
import { Route, Routes } from 'react-router-dom';
import { CommentPage } from './pages/CommentPage';

function App() {
  return (
    <>
      <div className="App">
      <Topbar/>
      <div className="main">
      <Leftaside/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/comment" element={<CommentPage/>}/>
      </Routes>
      <Rightaside/>
      </div>
      </div>
    </>
  );
}

export default App;
