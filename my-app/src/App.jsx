
import { Routes , Route } from 'react-router-dom';
import './App.css';
import { Google } from './Components/Google';
import { Show } from './Components/Serch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Google/>}/>
        <Route path='/Serch' element={<Show/>}/>
      </Routes>
     

      
    </div>
  );
}

export default App;
