import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/estilo.css'
import Navbar from './components/Navbar'
import Principal from './components/Principal'
import PaginaImoveis from './page/pagina-imoveis'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  const [contatoAberto, setContatoAberto] = useState(false);
  const [pagina, setPagina] = useState('home');
  const [scrollAlvo, setScrollAlvo] = useState(null);

  useEffect(() => {
    if (scrollAlvo) {
      document.getElementById(scrollAlvo)?.scrollIntoView({ behavior: 'smooth' });
      setScrollAlvo(null);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pagina]);

  const navegar = (paginaDestino, hash) => {
    if (paginaDestino === pagina) {
      if (hash) document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setScrollAlvo(hash || null);
    setPagina(paginaDestino);
  };

  return (
    <>
      <Navbar onAbrirContato={() => setContatoAberto(true)} paginaAtual={pagina} onNavegar={navegar} />
      <div key={pagina} className="page-enter">
        {pagina === 'imoveis'
          ? <PaginaImoveis />
          : <Principal onNavegar={navegar} />}
      </div>
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
