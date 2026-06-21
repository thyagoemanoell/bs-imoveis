import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// ─── mesmas chaves do contato.jsx ───
const EMAILJS_SERVICE_ID  = 'SEU_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'SEU_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY';
// ────────────────────────────────────

const WaIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// campo da logica onde o envio de mensagem chegará diretamente ao email do corretor.
const estadoInicial = { nome: '', email: '', telefone: '', mensagem: '' };

function Footer() {
  const formRef = useRef(null);
  const [campos, setCampos] = useState(estadoInicial);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setCampos({ ...campos, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('enviando');
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY)
      .then(() => { setStatus('ok'); setCampos(estadoInicial); })
      .catch(() => setStatus('erro'));
  };

  return (
    <footer id="rodape">

      {/* ── Seção de contato no rodapé ── */}

      <div className="footer-contato">
        <div className="footer-contato-inner">

          <div className="footer-contato-info">
            <div className="contato-eyebrow">Fale Comigo</div>
            <h2 className="footer-contato-titulo">
              Envie uma mensagem,<br />
              <span className="destaque">responderei em breve.</span>
            </h2>
            <p className="footer-contato-desc">
              Preencha o formulário e entrarei em contato
              o mais rápido possível para tirar suas dúvidas e
              apresentar as melhores oportunidades.
            </p>

            <div className="contato-detalhes">
              <div className="contato-det-item footer-det-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {/* EDITAR: email do corretor */}
                <span>corretor@email.com</span>
              </div>
              <div className="contato-det-item footer-det-item">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {/* campo de telefone do corretor */}
                <span>(98) 98465-5966</span>
              </div>
              <div className="contato-det-item footer-det-item">
                <WaIcon />
                {/* EDITAR: número WhatsApp */}
                <a href="https://wa.me/5598984655966" target="_blank" rel="noreferrer">(98) 98465-5966 (WhatsApp)</a>
              </div>
            </div>
          </div>

          <form ref={formRef} className="contato-form footer-form" onSubmit={handleSubmit} noValidate>
            <div className="cf-grupo">
              <label htmlFor="f-nome">Nome completo</label>
              <input id="f-nome" name="nome" type="text" placeholder="Seu nome" value={campos.nome} onChange={handleChange} required />
            </div>

            <div className="cf-linha">
              <div className="cf-grupo">
                <label htmlFor="f-email">E-mail</label>
                <input id="f-email" name="email" type="email" placeholder="seu@email.com" value={campos.email} onChange={handleChange} required />
              </div>
              <div className="cf-grupo">
                <label htmlFor="f-telefone">Telefone / WhatsApp</label>
                <input id="f-telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" value={campos.telefone} onChange={handleChange} />
              </div>
            </div>

            <div className="cf-grupo">
              <label htmlFor="f-mensagem">Mensagem</label>
              <textarea id="f-mensagem" name="mensagem" rows={4} placeholder="Conte o que você está procurando..." value={campos.mensagem} onChange={handleChange} required />
            </div>

            <button className="cf-btn" type="submit" disabled={status === 'enviando'}>
              {status === 'enviando' ? (
                <><span className="cf-spinner" />Enviando…</>
              ) : (
                <>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Enviar mensagem
                </>
              )}
            </button>

            {status === 'ok' && <div className="cf-feedback ok">Mensagem enviada com sucesso! Em breve entrarei em contato.</div>}
            {status === 'erro' && <div className="cf-feedback erro">Ocorreu um erro. Tente novamente ou entre em contato pelo WhatsApp.</div>}
          </form>

        </div>
      </div>

      {/* campo do rodapé ── */}
      <div className="footer-barra">
        <div className="footer-logo">
          <svg width="30" height="30" viewBox="0 0 36 36" fill="none">
            <path d="M6 18L18 7L30 18" stroke="#C8963E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 15.5V28H27V15.5" stroke="#C8963E" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="14" y="21" width="8" height="7" rx="1" fill="#C8963E" opacity="0.6" />
          </svg>
          <div>
            {/* campo de nome e do cargo no footer */}
            <div className="footer-logo-name">Bruno Sena</div>
            <div className="footer-logo-cargo">Corretor de Imóveis</div>
          </div>
        </div>

        {/* campo do ano e nome no copyright */}
        <div className="footer-copy">© 2026 Bruno Sena. Todos os direitos reservados.</div>

        <div className="footer-social-wrap">
          <span className="footer-social-label">Me siga nas redes sociais</span>

          {/* campo do link do Instagram */}
          <a className="soc-ico" href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* campo do link do Facebook */}
          <a className="soc-ico" href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* campo do link do LinkedIn */}
          <a className="soc-ico" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
