import './App.css';
import {Routes,Route} from 'react-router-dom'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
