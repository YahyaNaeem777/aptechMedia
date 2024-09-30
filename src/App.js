import logo from './logo.svg';
import './App.css';
import List from './screens/List';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ExtraImages from './screens/ExtraImages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path='/' element={<List />}/>
       <Route path='/:id' element={<ExtraImages />}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
