import React from 'react'
// import { BrowserRouter, Route,Routes} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NewSpot from './components/NewSpot';
import MeuComponente from './meu-componente';
import Home from './pages/Home';

//escrever 'rfce' --- react function component export

const Router = () => {
  return (
        <BrowserRouter>
          <Routes>
            {/* componente Route tem a propriedade onde passamos o caminho */}
            <Route path='/' element={<Home/>}/>
            <Route path='/nova-rota' element={<MeuComponente/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/new' element={<NewSpot/>}/>
          </Routes>       
        </BrowserRouter>
    )
}

export default Router;