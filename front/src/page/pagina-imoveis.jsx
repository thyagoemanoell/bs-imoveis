const IconCasa = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.9">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
  </svg>
);

// campo com a lista completa de imóveis — EDITAR: adicione, remova ou altere os cards abaixo
function PaginaImoveis() {
  return (
    <>
      {/* ═══════════════════════════════════
          TOPO DA PÁGINA
          EDITAR: título e subtítulo da página
      ════════════════════════════════════ */}
      <section className="pagina-imoveis-topo">
        <h1 className="pagina-imoveis-titulo">
          Todos os <span className="destaque">Imóveis</span>
        </h1>

        <p className="pagina-imoveis-sub">
          Confira a lista completa de imóveis e loteamentos disponíveis
          para compra e aluguel, selecionados com as melhores condições do mercado.
        </p>
      </section>

      {/* campo de busca/filtro */}
      <div className="pagina-imoveis-filtro">
        <div className="busca-card">
          <p className="busca-titulo">Filtrar imóveis</p>

          <div className="busca-campo">
            <label>Tipo de imóvel</label>
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

          <button className="btn-buscar" onClick={() => alert('Configure aqui a busca dos seus imóveis!')}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            Buscar
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════
          LISTA COMPLETA DE IMÓVEIS
          EDITAR: copie/cole um "card-imovel" para adicionar mais imóveis
      ════════════════════════════════════ */}
      <section id="imoveis-lista">
        <p className="pagina-imoveis-contagem">9 imóveis encontrados</p>

        <div className="imoveis-grid">

          
          {/* 1 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">À Venda</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 850.000</div>
              <div className="ci-nome">Apartamento – Vila Mariana</div>
              <div className="ci-infos">
                <span>🛏 2 quartos</span>
                <span>🛁 1 suíte</span>
                <span>📐 66m²</span>
                <span>🚗 1 vaga</span>
              </div>
            </div>
          </div>

          
          {/* 2 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">À Venda</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 1.650.000</div>
              <div className="ci-nome">Casa em Condomínio – Alphaville</div>
              <div className="ci-infos">
                <span>🛏 3 suítes</span>
                <span>📐 160m²</span>
                <span>🚗 2 vagas</span>
              </div>
            </div>
          </div>

          
          {/* 3 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge aluguel">Aluguel</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">
                R$ 4.500 <span style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.6 }}>/mês</span>
              </div>
              <div className="ci-nome">Apartamento – Pinheiros</div>
              <div className="ci-infos">
                <span>🛏 2 quartos</span>
                <span>🛁 1 suíte</span>
                <span>📐 75m²</span>
                <span>🚗 1 vaga</span>
              </div>
            </div>
          </div>

          
          {/* 4 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge loteamento">Loteamento</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 120.000</div>
              <div className="ci-nome">Lote – Loteamento São Gonçalo</div>
              <div className="ci-infos">
                <span>📐 300m²</span>
                <span>📍 São Luís, MA</span>
              </div>
            </div>
          </div>

          
          {/* 5 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">À Venda</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 320.000</div>
              <div className="ci-nome">Casa – Cohama</div>
              <div className="ci-infos">
                <span>🛏 3 quartos</span>
                <span>📐 110m²</span>
                <span>🚗 1 vaga</span>
              </div>
            </div>
          </div>

          
          {/* 6 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge aluguel">Aluguel</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">
                R$ 2.200 <span style={{ fontSize: '0.75rem', fontWeight: 400, opacity: 0.6 }}>/mês</span>
              </div>
              <div className="ci-nome">Casa – Renascença</div>
              <div className="ci-infos">
                <span>🛏 2 quartos</span>
                <span>📐 90m²</span>
              </div>
            </div>
          </div>

          
          {/* 7 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge loteamento">Loteamento</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 95.000</div>
              <div className="ci-nome">Lote – Loteamento Belém</div>
              <div className="ci-infos">
                <span>📐 250m²</span>
                <span>📍 Belém, PA</span>
              </div>
            </div>
          </div>

          
          {/* 8 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">À Venda</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 980.000</div>
              <div className="ci-nome">Sobrado – Ponta D'Areia</div>
              <div className="ci-infos">
                <span>🛏 4 quartos</span>
                <span>🛁 2 suítes</span>
                <span>📐 220m²</span>
                <span>🚗 2 vagas</span>
              </div>
            </div>
          </div>

          
          {/* 9 campo de cadastro do imovel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">Comercial</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 550.000</div>
              <div className="ci-nome">Sala Comercial – Centro</div>
              <div className="ci-infos">
                <span>📐 55m²</span>
                <span>🚗 1 vaga</span>
              </div>
            </div>
          </div>

          {/* 10 campo de cadastro do imóvel */}
          <div className="card-imovel">
            <div className="ci-img">
              <div className="ci-ph">
                <IconCasa />
                <span>Foto do imóvel</span>
              </div>
              <span className="ci-badge venda">Comercial</span>
            </div>
            <div className="ci-body">
              <div className="ci-preco">R$ 550.000</div>
              <div className="ci-nome">Sala Comercial – Centro</div>
              <div className="ci-infos">
                <span>📐 55m²</span>
                <span>🚗 1 vaga</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default PaginaImoveis;