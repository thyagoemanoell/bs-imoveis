import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/estilo.css'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  const [contatoAberto, setContatoAberto] = useState(false);

  return (
    <>
      <Navbar onAbrirContato={() => setContatoAberto(true)} />
      <Principal />
      <Footer />
      <Contato aberto={contatoAberto} onFechar={() => setContatoAberto(false)} />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
