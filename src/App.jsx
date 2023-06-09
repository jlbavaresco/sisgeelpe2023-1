import 'bootstrap/dist/css/bootstrap.min.css'
import '@popperjs/core/dist/cjs/popper.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css' 
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import Menu from './componentes/Menu'
import Home from './componentes/Home'
import Predio from './componentes/telas/predios/Predio'
import Sala from './componentes/telas/salas/Sala'


function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route exact="true" path='/' element={<Home/>}/>
        <Route exact="true" path='/predios' element={<Predio/>}/>
        <Route exact="true" path='/salas' element={<Sala/>}/>
      </Routes>
    </Router>
  );
}

export default App;
