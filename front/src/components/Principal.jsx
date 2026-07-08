import casaHero from '../assets/img/casa-hero.jpg';
import fotoCorretor from '../assets/foto perfil/Captura de Tela 2026-06-26 às 05.50.52.png';

const WaIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Principal({ onNavegar }) {
  return (
    <>
      {/* ═══════════════════════════════════
          HERO
          EDITAR: eyebrow, título, subtítulo, botões e foto de fundo
      ════════════════════════════════════ */}
      <section id="hero">
        <img src={casaHero} alt="Imóvel de destaque" className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-left">
          
          {/* frase de introdução  */}

          <div className="hero-eyebrow">Realize o seu melhor negócio</div>

          {/* campo título */}
          <h1 className="hero-title">
            Mais que imóveis,<br />realizo <span className="destaque">sonhos.</span>
          </h1>

          {/* campo subtítulo */}
          <p className="hero-sub">
            Especialista em ajudar você a comprar, vender ou alugar
            o imóvel ideal com segurança, transparência e as melhores condições.
          </p>

          <div className="hero-btns">
            <a className="btn-gold" href="#imoveis">Ver imóveis →</a>
            
            {/* EDITAR: link WhatsApp */}

            <a className="btn-outline-white" href="https://wa.me/5598984655966" target="_blank" rel="noreferrer">
              <WaIcon />
              Fale Comigo
            </a>
          </div>
        </div>
      </section>

      {/* campo de busca */}
      <div id="busca">
        <div className="busca-card">
          <p className="busca-titulo">Encontre o imóvel ideal</p>

          <div className="busca-campo">
            <label>Tipo de imóvel</label>
            
            {/* campo de opções */}

            <select>
              <option value="">Selecione</option>
              <option>Casa</option>
              <option>Apartamento</option>
              <option>Terreno / Lote</option>
              <option>Loteamento</option>
              <option>Comercial</option>
            </select>
          </div>

          <div className="busca-campo">
            <label>Finalidade</label>
            <select>
              <option value="">Selecione</option>
              <option>Comprar</option>
              <option>Alugar</option>
              <option>Investir</option>
            </select>
          </div>

          <div className="busca-campo">
            <label>Localização</label>
            {/* EDITAR: placeholder de localização */}
            <input type="text" placeholder="Ex.: São Luís, MA" />
          </div>

          <div className="busca-campo">
            <label>Faixa de preço</label>
            <select>
              <option value="">Selecione</option>
              <option>Até R$ 200.000</option>
              <option>R$ 200k – R$ 500k</option>
              <option>R$ 500k – R$ 1M</option>
              <option>Acima de R$ 1M</option>
            </select>
          </div>

          {/* campo de resposta caso o usuario consiga encontrar um imovel ou loteamento desejado */}
          <button className="btn-buscar" onClick={() => alert('Configure aqui a busca dos seus imóveis!')}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            Buscar
          </button>
        </div>
      </div>

      {/* campos de foto, nome, bio, anos e os 4 diferenciais */}
      <section id="sobre">
        <div className="sobre-grid">

          <div className="corretor-foto-wrap">
            <div className="corretor-foto">
              <img src={fotoCorretor} alt="Bruno Sena" style={{width:'100%',height:'100%',objectFit:'cover'}} />
            </div>

            {/* campo de tempo de experiência */}
            <div className="exp-badge">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6" color="#C8963E">
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="none" stroke="#C8963E" strokeWidth="1.6" />
              </svg>
              <div>
                <div className="exp-num">5+</div>
                <div className="exp-texto">Anos de experiência<br />no mercado como Especialista em Loteamento</div>
              </div>
            </div>
          </div>

          <div>
            <div className="sobre-label">Sobre Mim</div>

            {/* Campo do sobre mim do corretor  */}
            <h2 className="sobre-titulo">
              Prazer, eu sou
              <span className="destaque">Bruno Sena.</span>
              <span className="creci">CRECI 6871</span>
            </h2>

            {/* campo de biografia do corretor */}

            <p className="sobre-bio">
              Especialista do grupo de loteamentos <strong>São Gonçalo</strong>, atuando nos mercados de <strong>São Luís - MA, Belém - PA e Teresina - PI</strong>, com foco no segmento de loteamentos.
              Atuação profissional é pautada por três príncipios instituicionais: <strong>transparência nas negociações, segurança júridica e patrimonial, e confiabilidade em todas as etapas do processo de aquisição.</strong>
              O atendimento é conduzido de forma consultiva e personalizada, com o objetivo de assegurar que cada cliente tenha acesso às melhores oportunidades do mercado, aliado a um suporte técnico qualificado do início ao fim da negociação.
              Nosso compromisso é viabilziar, com solidez e segurança, a realização de um dos maiores objetivos de vida: a conquista da casa própria. 
            </p>

            {/* Campo com 4 diferenciais: "ícone, título e descrição" */}
            
            <div className="diferenciais">
              
              {/* icone de segurança */}

              <div className="dif-item">
                <svg className="dif-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <div className="dif-nome">Segurança</div>
                <div className="dif-desc">Negociações seguras e com total transparência.</div>
              </div>

              {/* icone de atendimento */}

              <div className="dif-item">
                <svg className="dif-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <div className="dif-nome">Atendimento</div>
                <div className="dif-desc">Acompanhamento completo em todas as etapas.</div>
              </div>

              {/* icone de casa */}

              <div className="dif-item">
                <svg className="dif-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <div className="dif-nome">Melhores Oportunidades</div>
                <div className="dif-desc">Imóveis selecionados com as melhores condições.</div>
              </div>

              {/* icone de pos venda */}

              <div className="dif-item">
                <svg className="dif-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 0013.5 0v-4.5" />
                </svg>
                <div className="dif-nome">Pós-venda</div>
                <div className="dif-desc">Suporte mesmo após a conclusão do negócio.</div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* campo de cadastrar imóveis, loteamentos, compra e venda */}
      <section id="imoveis">
        <div className="imoveis-header">
          <div>
            <div className="imoveis-eyebrow">Imóveis em destaque</div>
            
            {/* campo título  */}

            <h2 className="imoveis-titulo">Encontre seu próximo imóvel</h2>
          </div>
          <a className="btn-ver-todos" href="#imoveis-lista" onClick={(e) => { e.preventDefault(); onNavegar('imoveis'); }}>Ver todos os imóveis →</a>
        </div>

        <div className="imoveis-grid">

          {/* 1 campo de cadastro do imovel */}

          <div className="card-imovel">
            
            {/* EDITAR: imagem — substitua por <img src="foto.jpg" alt="..." style={{width:'100%',height:'200px',objectFit:'cover'}} /> */}

            <div className="ci-img">
              <div className="ci-ph">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                </svg>
                <span>Foto do imóvel</span>
              </div>
              
              {/* campo de classe "venda", "aluguel", "loteamento" e "imóvel" */}

              <span className="ci-badge venda">Imóvel</span>
            </div>
            <div className="ci-body">
              
              {/* Campo de descrição, nome e localização */}

              <div className="ci-preco">R$ 850.000</div>
              <div className="ci-nome">Apartamento – Vila Mariana</div>
              <div className="ci-infos">
                <span>🛏 Nº de Quartos</span>
                <span>🛁 Nº de Banheiros</span>
                <span>📐 Metragem (m²)</span>
                <span>🚗 Nº de Garagens</span>
              </div>
            </div>
          </div>

          {/* 2 campo de cadastro do imovel */}

          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                </svg>
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">Loteamento</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 1.650.000</div>
              <div className="ci-nome">Casa em Condomínio – Alphaville</div>
              <div className="ci-infos">
                <span>📍 Localização</span>
                <span>📐 Metragem (m²)</span>
              </div>
            </div>
          </div>

          {/* 3 campo de cadastro do imovel */}

          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                </svg>
                <span>Foto do imóvel</span>
              </div>
              
              {/* campo de informação do imóvel */}

              <span className="ci-badge aluguel">À Venda</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">
                R$ 4.500 <span style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.6 }}>/mês</span>
              </div>
              <div className="ci-nome">Apartamento – Pinheiros</div>
              <div className="ci-infos">
                <span>🛏 Nº de Quartos</span>
                <span>🛁 Nº de Banheiros</span>
                <span>📐 Metragem (m²)</span>
                <span>🚗 Nº de Garagens</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* campo de depoimentos de clientes do corretor */}

      <section id="depoimentos">
        <div className="dep-eyebrow">Depoimentos</div>
        
        {/* campo onde os clientes falam sobre o corretor */}

        <h2 className="dep-titulo">O que meus clientes dizem</h2>

        <div className="dep-grid">

          {/* 1 depoimento de cliente */}

          <div className="card-dep">
            <span className="dep-aspas">"</span>
            
            {/* campo texto */}

            <p className="dep-texto">
              Excelente profissional! Me ajudou em todo o processo de compra do
              meu apartamento, sempre muito atencioso e transparente.
            </p>
            <div className="dep-autor">

              {/* EDITAR: substitua por <img src="foto.jpg"> ou use emoji/iniciais */}

              <div className="dep-foto">👤</div>
              <div>
                
                {/* campo de nome e cidade */}

                <div className="dep-nome">Juliana S.</div>
                <div className="dep-cidade">São Paulo, SP</div>
              </div>
            </div>
          </div>

          {/* 2 depoimento de cliente */}

          <div className="card-dep">
            <span className="dep-aspas">"</span>
            <p className="dep-texto">
              Vendeu meu imóvel em menos tempo do que eu esperava e pelo melhor
              preço. Super recomendo a todos!
            </p>
            <div className="dep-autor">
              <div className="dep-foto">👤</div>
              <div>
                <div className="dep-nome">Carlos A.</div>
                <div className="dep-cidade">São Paulo, SP</div>
              </div>
            </div>
          </div>

          {/* 3 depoimento de cliente */}

          <div className="card-dep">
            <span className="dep-aspas">"</span>
            <p className="dep-texto">
              Atendimento impecável do início ao fim. Me senti segura em cada
              etapa da negociação. Com certeza vou indicar!
            </p>
            <div className="dep-autor">
              <div className="dep-foto">👤</div>
              <div>
                <div className="dep-nome">Fernanda L.</div>
                <div className="dep-cidade">São Paulo, SP</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Campo de Conato que inclue título, subtítulo, link WhatsApp */}
      <section id="cta">
        <div className="cta-left">
          <div className="cta-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" />
              <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeLinecap="round" />
              <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeLinecap="round" />
              <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" />
            </svg>
          </div>

          <div>
            
            {/* campo de introdução a conversa sobre o seu negocio */}

            <div className="cta-titulo">Vamos conversar sobre o seu próximo negócio?</div>
            <div className="cta-sub">Estou pronto para te ajudar a realizar o melhor negócio imobiliário.</div>
          </div>
        </div>

        {/* campo do link WhatsApp */}
        <a className="btn-gold" href="https://wa.me/5598984655966" target="_blank" rel="noreferrer">
          <WaIcon />
          Fale Comigo
        </a>
      </section>
    </>
  );
}

export default Principal;
