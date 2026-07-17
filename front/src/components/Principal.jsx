import casaHero from '../assets/img/casa-hero.jpg';
import fotoCorretor from '../assets/foto perfil/Captura de Tela 2026-06-26 às 05.50.52.png';
import iconCama from '../icons/cama-de-casal.png';
import iconBanheiro from '../icons/banheiro-publico.png';
import iconMetragem from '../icons/governante.png';
import iconGaragem from '../icons/garagem.png';
import iconLocalizacao from '../icons/pino-de-localizacao.png';

function Principal({ onNavegar }) {
  return (
    <>
      {/* Cabeçalho */}
      <section id="hero">
        <img src={casaHero} alt="Imóvel de destaque" className="hero-bg" />
        <div className="hero-overlay" />

        <div className="hero-left">
          
          {/* frase de introdução  */}

          <div className="hero-eyebrow">Realize o seu melhor negócio</div>

          {/* campo título */}
          <h1 className="hero-title">
            Mais que imóveis,<br />realizando <span className="destaque">sonhos.</span>
          </h1>

          {/* campo subtítulo */}
          <p className="hero-sub">
            Especialista em ajudar você a comprar, vender ou alugar
            o imóvel ideal com segurança, transparência e as melhores condições.
          </p>

          <div className="hero-btns">
            <a className="btn-gold" href="#imoveis">Ver imóveis →</a>
            
            {/* EDITAR: link WhatsApp */}

            <a className="btn-outline-white" href="#sobre" onClick={(e) => { e.preventDefault(); onNavegar('home', 'sobre'); }}>
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.6">
                <circle cx="12" cy="8" r="4" />
                <path strokeLinecap="round" d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8" />
              </svg>
              Sobre o corretor
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
              Prazer, me chamo
              <span className="destaque">Bruno Sena.</span>
              <span className="creci">CRECI-MA 6871-F</span>
            </h2>

            {/* campo de biografia do corretor */}

            <p className="sobre-bio">
              Especialista do grupo de loteamentos <strong>São Gonçalo</strong>, atuando nas grandes cidades como: <strong>São Luís - MA, Belém - PA e Teresina - PI</strong>, com o foco no segmento de loteamentos.
              Atuação profissional é pautada por três príncipios instituicionais: <strong>transparência nas negociações, segurança júridica e patrimonial, e confiabilidade em todas as etapas do processo de aquisição. </strong>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
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
          <a className="btn-ver-todos" href="#imoveis-lista" onClick={(e) => { e.preventDefault(); onNavegar('imoveis'); }}>Ver todos os imóveis <span className="btn-seta">→</span></a>
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
                <span><img src={iconCama} alt="Quartos" className="ci-icon" /> Nº de Quartos</span>
                <span><img src={iconBanheiro} alt="Banheiros" className="ci-icon" /> Nº de Banheiros</span>
                <span><img src={iconMetragem} alt="Metragem" className="ci-icon" /> Metragem (m²)</span>
                <span><img src={iconGaragem} alt="Garagens" className="ci-icon" /> Nº de Garagens</span>
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
                <span><img src={iconLocalizacao} alt="Localização" className="ci-icon" /> Localização</span>
                <span><img src={iconMetragem} alt="Metragem" className="ci-icon" /> Metragem (m²)</span>
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
                <span><img src={iconCama} alt="Quartos" className="ci-icon" /> Nº de Quartos</span>
                <span><img src={iconBanheiro} alt="Banheiros" className="ci-icon" /> Nº de Banheiros</span>
                <span><img src={iconMetragem} alt="Metragem" className="ci-icon" /> Metragem (m²)</span>
                <span><img src={iconGaragem} alt="Garagens" className="ci-icon" /> Nº de Garagens</span>
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
    </>
  );
}

export default Principal;
