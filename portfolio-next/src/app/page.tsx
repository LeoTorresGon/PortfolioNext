'use client'
import React from 'react';
import Image from 'next/image'

const PortfolioPage: React.FC = () => {
  return (
    <>
      <main role="main" className="container">
        {/* 1. Pagina Inicial */}
        <Image
          src="/images/perfil.jpg"
          alt="Leonardo Torres"
          width={500}
          height={500}
          style = {{ borderRadius: '50%',  border: '2px solid #fff',  width: '400px', height: '460px', margin: 'auto' }}
        />
          {/* Style-inline apenas na imagem, porque não funcionou por classes */}
        <header>
          <h1>Leonardo Torres</h1>
          <p>Back End Developer</p>
        </header>
        {/* Conteúdo separado por sections para separar a página na estrutura obrigatória com excessão da página inicial, feita num header por questão visual */}
        <section>
          <h2>Sobre Mim</h2>
          <p className="about-me">
            Olá! Me chamo Leonardo, estudante de Ciência da Computação pela Universidade Federal de São João del Rei (UFSJ). Desde cedo, tenho
            contato com a computação como filho de um programador e tenho interesse pela área desde sempre. <br/>  Em 2021, dei meus primeiros passos 
            para aprender a programar ao entrar em um curso técnico em informática na Universidade do Vale do Paraíba (Univap). Desde então,
            busco projetos para aprimorar minhas habilidades como dev. Hoje, já fiz projetos para Android em Kotlin, mods em Java para Minecraft, 
            aplicativos desktop com C# e muitos outros. Diversas vezes integrei os projetos com banco de dados MySQL e busco melhorar minhas habilidades
            no backend, assim como com banco de dados.
          </p>
        </section>
        <section>
          <h2>Habilidades</h2>
          <div className="skills">
            <span className="skill">Java</span>
            <span className="skill">C#</span>
            <span className="skill">SQL</span>
            <span className="skill">Python</span>
            <span className="skill">MongoDB</span>
            <span className="skill">Kotlin</span>
            <span className="skill">Comprometimento</span>
            <span className="skill">Paciência</span>
          </div>
        </section>

        <section className="projects">
          <h2>Projetos</h2>
          <article
            className="project"
          >

            {/* O projeto de gerenciamento de redes não é um projeto que pode ser publicado sem autorização de outras entidades, portanto deixarei apenas as imagens e descrição */}
            <div className="project-images">
              <div className="project-image">
                <Image
                src="/images/telaServidor.png"
                width={500}
                height={500}
                alt="Tela inicial servidor"
                />
              </div>
              <div className="project-image">
              <Image
                src="/images/telaCPU.png"
                width={500}
                height={500}
                alt="Tela uso CPU"
                />
              </div>
              <div className="project-image">
              <Image
                src="/images/telaEnderecoIP.png"
                width={500}
                height={500}
                alt="Tela endereço ip"
                />
              </div>
              <div className="project-image">
              <Image
                src="/images/telaTopologia.png"
                width={500}
                height={500}
                alt="Tela topologia"
                />
              </div>
              <div className="project-image">
              <Image
                src="/images/telaCliente.png"
                width={500}
                height={500}
                alt="Tela topologia com informações do cliente"
                />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Projeto Gerenciamento de Redes</h3>
              <p className="project-desc">
                Um projeto feito pensando em redes pequenas para facilitar o gerenciamento das mesmas. Funciona para monitorar a máquina local 
                ou máquinas cliente através do Wi-Fi, além de funções de detecção dos dispositivos conectados na rede.
              </p>
            </div>
          </article>

          <article
            className="project"
          >
            <div className="project-images">
              <div className="project-image">
                <Image
                  src="/images/normal.png"
                  width={500}
                  height={500}
                  alt="Imagens coladas sem filtro"
                />
              </div>
              <div className="project-image">
                <Image
                  src="/images/cinza.png"
                  width={500}
                  height={500}
                  alt="Filtro cinza aplicado na imagem"
                />
              </div>
              <div className="project-image">
                <Image
                  src="/images/binario.png"
                  width={500}
                  height={500}
                  alt="Filtro binário aplicado na imagem"
                />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Processamento de imagem</h3>
              <p className="project-desc">
                Um pequeno projeto testando processamento de imagem mexendo com os valores RGB dos pixels da imagem, feito em .NET.
              </p>
              <a
                href="https://github.com/LeoTorresGon/ProcessamentoDeImagem-CS"
                target="_blank"
                className="github-link">
              GitHub
            </a>
            </div>
          </article>

          <article
            className="project"
          >
            <div className="project-images">
              <div className="project-image">
                <Image
                  src="/images/paint1.png"
                  width={500}
                  height={500}
                  alt="Paint Triângulo Azul Pontilhado"
                />
              </div>
              <div className="project-image">
                <Image
                  src="/images/paint2.png"
                  width={500}
                  height={500}
                  alt="Paint Retângulo Roxo Ponto Linha"
                />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Paint</h3>
              <p className="project-desc">
                Programa feito em C# para permitir desenhar formas na tela com opções pré definidas de cores, tamanho de linha e forma de contorno. 
              </p>
              <a className="github-link"
                href="https://github.com/LeoTorresGon/Paint-CS"
                target="_blank">
              GitHub
            </a>
            </div>
          </article>

          <article
            className="project"
          >
            <div className="project-images">
              <div className="project-image">
                <Image
                  src="/images/calcsoma.png"
                  width={500}
                  height={500}
                  alt="Calculadora efetuando soma"
                />
              </div>
              <div className="project-image">
                <Image
                  src="/images/calcexpo.png"
                  width={500}
                  height={500}
                  alt="Calculadora efetuando exponenciação"
                />
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">Calculadora</h3>
              <p className="project-desc">
                Uma calculadora simples feita em C#, com operações básicas sequenciais e outras operações como exponenciação e raiz quadrada.
              </p>
              <a className="github-link"
                href="https://github.com/LeoTorresGon/Calculadora-CS"
                target="_blank">
              GitHub
            </a>
            </div>
          </article>

        </section>
        <section>
          <h2>Contato</h2>
          <div className="contact-info">
            <a
              href="mailto:leogontorres@gmail.com"
              target="_blank">
              leogontorres@gmail.com
            </a>
            <a
              href="tel:+5512983009111"
              target="_blank">
              (12) 98300-9111
            </a>
            <a
              href="https://www.linkedin.com/in/leonardo-torres-gonçalves-e-silva-835849250/"
              target="_blank">
              LinkedIn
            </a>
            <a
              href="https://github.com/LeoTorresGon"
              target="_blank">
              GitHub
            </a>
          </div>
        </section>
      </main>
      <footer>
        <p>Desenvolvido por Leonardo Torres</p>
      </footer>
      <style jsx>{`
      /* Optei pelas classes CSS para controle mais fácil do CSS e do HTML separadamente e melhor organização do código */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

        .container {
          font-family: 'Poppins', sans-serif;
          background: rgba(0, 0, 0, 0.75);
          max-width: 1500px;
          max-height: 890px;
          overflow-y: auto;
          box-shadow: 0 8px 50px rgba(31, 38, 135, 0.7);
          padding: 40px 50px;
          margin: 40px auto;
          border-radius: 40px;
        }

        header {
          text-align: center;
          margin-bottom: 40px;
        }

        header h1 {
          font-size: 4.2rem;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          text-shadow: 1.8px 1.8px 6px rgba(50, 50, 50, 0.85);
        }

        header p {
          font-weight: 600;
          font-size: 1.8rem;
          letter-spacing: 2px;
          color: #b2b2b2;
        }

        section {
          margin-bottom: 40px;
        }

        h2 {
          font-weight: 700;
          font-size: 2.5rem;
          border-bottom: 4px solid #764ba2;
          padding-bottom: 10px;
          margin-bottom: 30px;
          letter-spacing: 2px;
        }

        .about-me {
          font-weight: 400;
          font-size: 1.5rem;
          line-height: 1.7;
          color: #dcdcdc;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }

        .skill {
          background: #764ba2;
          padding: 18px 28px;
          border-radius: 35px;
          font-weight: 600;
          font-size: 1.5rem;
          box-shadow: 0 7px 18px rgba(118, 75, 162, 0.75);
          transition: background 0.3s ease;
        }

        .skill:hover {
          background: #667eea;
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.9);
        }

        .projects {
          display: flex;
          flex-direction: column;
          gap: 35px;
        }

        .project {
          background: #5f4a8d;
          border-radius: 30px;
          padding: 30px 35px;
          box-shadow: 0 10px 30px rgba(95, 74, 141, 0.75);
          transition: background 0.3s ease;
          display: flex;
          gap: 30px;
          align-items: flex-start;
        }

        .project:hover {
          background: #7861b8;
        }

        .project-images {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          overflow-x: auto;
          max-width: 385px;
          padding-bottom: 4px;
          scrollbar-width: thin;
          scrollbar-color: #764ba2 transparent;
        }

        .project-image {
          flex-shrink: 0;
          width: 250px;
          height: 180px;
          background: #a69de1;
          border-radius: 18px;
          box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.35);
          display: flex;
          justify-content: center;
          align-items: center;
          color: #4a418f;
          padding: 12px;
        }

        .project-content {
          flex: 1;
          position: relative;
        }

        .project-title {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 12px;
          text-shadow: 1.5px 1.5px 6px rgba(0, 0, 0, 0.7);
        }

        .project-desc {
          font-weight: 400;
          font-size: 1.3rem;
          color: #dcdcdc;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 1.6rem;
          font-weight: 600;
          color: #e0d4ff;
        }

        .contact-info a {
          color: #bda1f7;
          transition: color 0.3s ease;
        }

        .contact-info a:hover {
          color: #fff;
          text-decoration: underline;
        }

        /* Scrollbar */
        .container::-webkit-scrollbar {
          width: 10px;
        }

        .container::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 15px;
        }

        .container::-webkit-scrollbar-thumb {
          background: #764ba2;
          border-radius: 15px;
        }

        .github-link {
          position: absolute;
          background: #764ba2;
          border-radius: 20px;
          bottom: -90px;
          right: -20px;
          padding: 10px 20px;
          color: #fff;
          text-align: right;
          transition: color 1.3s ease;
        }

        .github-link:hover {
          background:rgb(141, 56, 175);
        }
        
      `}</style>
    </>
  );
};

export default PortfolioPage;
