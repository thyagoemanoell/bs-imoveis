import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

// ─── CONFIGURAÇÃO EMAILJS ────────────────────────────────────────────
// 1. Crie sua conta em https://www.emailjs.com (gratuito)
// 2. Adicione um Email Service (Gmail, Outlook, etc.) e copie o Service ID
// 3. Crie um Email Template e copie o Template ID
// 4. Em Account > API Keys, copie sua Public Key
// Substitua os valores abaixo pelos seus:
const EMAILJS_SERVICE_ID  = 'SEU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────

const estadoInicial = { nome: '', email: '', telefone: '', mensagem: '' };

function Contato({ aberto, onFechar }) {
  const formRef = useRef(null);
  const [campos, setCampos] = useState(estadoInicial);
  const [status, setStatus] = useState(null); // null | 'enviando' | 'ok' | 'erro'

  useEffect(() => {
    if (aberto) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setStatus(null);
      setCampos(estadoInicial);
    }
    return () => { document.body.style.overflow = ''; };
  }, [aberto]);

  useEffect(() => {
    const fecharEsc = (e) => { if (e.key === 'Escape') onFechar(); };
    window.addEventListener('keydown', fecharEsc);
    return () => window.removeEventListener('keydown', fecharEsc);
  }, [onFechar]);

  if (!aberto) return null;

  const handleChange = (e) => {
    setCampos({ ...campos, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('enviando');

    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('ok');
        setCampos(estadoInicial);
      })
      .catch(() => setStatus('erro'));
  };

  return (
    <div className="modal-overlay" onClick={onFechar}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-fechar" onClick={onFechar} aria-label="Fechar">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="contato-inner">
          <div className="contato-info">
            <div className="contato-eyebrow">Fale Comigo</div>
            <h2 className="contato-titulo">
              Envie uma mensagem,<br />
              <span className="destaque">responderei em breve.</span>
            </h2>
            <p className="contato-desc">
              Preencha o formulário e entrarei em contato
              o mais rápido possível para tirar suas dúvidas e
              apresentar as melhores oportunidades do mercado.
            </p>

            <div className="contato-detalhes">
              <div className="contato-det-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* campo email do corretor */}
                <span>corretor@email.com</span>
              </div>
              <div className="contato-det-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {/* campo telefone do corretor */}
                <span>(98) 98465-5966</span>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contato-form" onSubmit={handleSubmit} noValidate>
            <div className="cf-grupo">
              <label htmlFor="nome">Nome completo</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Seu nome"
                value={campos.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cf-linha">
              <div className="cf-grupo">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={campos.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cf-grupo">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={campos.telefone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="cf-grupo">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                placeholder="Conte o que você está procurando..."
                value={campos.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <button className="cf-btn" type="submit" disabled={status === 'enviando'}>
              {status === 'enviando' ? (
                <>
                  <span className="cf-spinner" />
                  Enviando…
                </>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar mensagem
                </>
              )}
            </button>

            {status === 'ok' && (
              <div className="cf-feedback ok">
                Mensagem enviada com sucesso! Em breve entrarei em contato.
              </div>
            )}
            {status === 'erro' && (
              <div className="cf-feedback erro">
                Ocorreu um erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contato;
