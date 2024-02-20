import '../src/App.css';
import './editarmotorista.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Motorista from './Motorista';
import CadastrarMotorista from './CREATEmotorista';
import EditarMotorista from './UPDATEmotorista';
import HeaderSPT from './Components do React/Header/header';
import QuemSomos from './Paginas/Quem Somos/quemsomos.js';
import SejaMotorista from './Paginas/Seja Motorista/sejamotorista.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderSPT></HeaderSPT>
        <Routes>
          <Route path='/' element={<Motorista />}></Route>
          
          <Route path='/cadastrar' element={<CadastrarMotorista />}></Route>
          <Route path='/editar/:id' element={<EditarMotorista />}></Route>
          <Route path='/quemsomos' element={<QuemSomos/>}></Route>
          <Route path='/quemsomos' element={<QuemSomos/>}></Route>
          <Route path='/sejamotorista' element={<SejaMotorista/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>


  );
}

export default App;
