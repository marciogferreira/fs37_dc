import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Carrinho from './components/Carrinho'
import { createContext, useState } from 'react'

export const CarrinhoContext = createContext();
export const AutorizacaoContext = createContext();

function App() {
  
  const[logado, setLogado] = useState(false)
  // ARRAY
  const[lista, setLista] = useState([])
  const[nomeLoja, setNomeLoja] = useState('DigiStore')

  return (
    <AutorizacaoContext.Provider value={{ logado, setLogado }}>
      <CarrinhoContext.Provider value={{ lista, setLista, nomeLoja, setNomeLoja }}>
        {nomeLoja}
        <Carrinho />

        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        
      </CarrinhoContext.Provider>
    </AutorizacaoContext.Provider>
  )
}

export default App
