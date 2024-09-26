import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/Home'
import ContatoPage from './pages/Contato'
import Menu from './components/Menu'
import LoginPage from './pages/Login'
import TrabalheConoscoPage from './pages/TrabalheConosco'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contato' element={<ContatoPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/trabalhe-conosco' element={<TrabalheConoscoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
