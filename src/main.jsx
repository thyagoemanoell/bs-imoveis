import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/estilo.css'
import Navbar from './components/navbar'
import Principal from './components/principal'
import Contato from './components/contato'
import Footer from './components/footer'

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
