
import "./App.css";
import petcareImage from "./assets/petcare.png";
import geekImage from "./assets/lojageek.png";
import jurisImage from "./assets/jurisai.png";

function App() {
  const projects = [
    {
      number: "01",
      name: "JurisAI",
      category: "INTELIGÊNCIA ARTIFICIAL",
      description:
        "Uma aplicação que utiliza inteligência artificial para auxiliar na análise, interpretação e organização de documentos jurídicos.",
      technologies: ["React", "JavaScript", "IA"],
      status: "Em desenvolvimento",
      type: "juris",
    },
    {
      number: "02",
      name: "PetCare",
      category: "ANÁLISE DE DADOS",
      description:
        "Dashboard desenvolvido no Power BI para visualizar indicadores, acompanhar informações e facilitar a análise de dados.",
      technologies: ["Power BI", "DAX", "Modelagem de dados"],
      status: "Projeto desenvolvido",
      type: "petcare",
    },
    {
      number: "03",
      name: "Loja Virtual Geek",
      category: "DESENVOLVIMENTO WEB",
      description:
        "Uma loja virtual de moda geek, com produtos inspirados em animes, mangás, jogos e outros universos da cultura geek.",
      technologies: ["React", "JavaScript", "CSS"],
      status: "Em desenvolvimento",
      type: "geek",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Angular",
    "Flutter",
    "Firebase",
    "Node.js",
    "Power BI",
    "Figma",
    "GitHub",
    "Inteligência Artificial",
  ];

  return (
    <>
      <header className="header">
        <a href="#inicio" className="logo">
          <span className="logo-symbol">AN</span>

          <span className="logo-text">
            <strong>ANICK</strong>
            <small>TECHNOLOGY & DEVELOPMENT</small>
          </span>
        </a>

        <nav className="navigation">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#projetos" className="header-button">
          Ver projetos <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">
            <span className="section-label">
              <span className="status-dot"></span>
              PORTFÓLIO
            </span>

            <h1>
              Transformando ideias em{" "}
              <span>soluções digitais.</span>
            </h1>

            <p className="hero-description">
              Olá! Sou estudante de Análise e Desenvolvimento de Sistemas,
              apaixonada por tecnologia, inovação e pela criação de soluções
              que conectam criatividade e desenvolvimento.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Conheça meus projetos <span>↗</span>
              </a>

              <a href="#sobre" className="secondary-button">
                Sobre mim
              </a>
            </div>

            <div className="hero-bottom">
              <span>DESENVOLVIMENTO</span>
              <span>INTELIGÊNCIA ARTIFICIAL</span>
              <span>TECNOLOGIA</span>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="hero-circle circle-one"></div>
            <div className="hero-circle circle-two"></div>
            <div className="hero-monogram">AN</div>
          </div>
        </section>

        <section className="expertise section-container" id="habilidades">
          <div className="section-heading">
            <span className="section-label">01 / ÁREAS DE INTERESSE</span>
            <h2>
              Tecnologia com <span>propósito.</span>
            </h2>
            <p>
              Áreas que despertam minha curiosidade e nas quais busco
              desenvolver conhecimentos e experiências.
            </p>
          </div>

          <div className="expertise-grid">
            <article className="expertise-card">
              <span className="card-number">01</span>
              <div className="expertise-icon">✳</div>
              <h3>Inteligência Artificial</h3>
              <p>
                Exploração de ferramentas inteligentes e desenvolvimento
                de soluções que tornam processos mais eficientes.
              </p>
            </article>

            <article className="expertise-card">
              <span className="card-number">02</span>
              <div className="expertise-icon">⌘</div>
              <h3>Desenvolvimento Web</h3>
              <p>
                Criação de interfaces e aplicações, unindo funcionalidade,
                organização e experiência do usuário.
              </p>
            </article>

            <article className="expertise-card">
              <span className="card-number">04</span>
              <div className="expertise-icon">↗</div>
              <h3>Aprendizado contínuo</h3>
              <p>
                Interesse em descobrir novas tecnologias, experimentar
                ferramentas e ampliar minhas habilidades.
              </p>
            </article>
          </div>
        </section>

        <section className="about section-container" id="sobre">
          <div className="about-decoration">
            <span className="about-initials">AN.</span>
            <span className="about-caption">
              CURIOSITY · CREATIVITY · TECHNOLOGY
            </span>
          </div>

          <div className="about-content">
            <span className="section-label">02 / SOBRE MIM</span>

            <h2>
              Mais do que código, gosto de entender{" "}
              <span>o que é possível criar.</span>
            </h2>

            <p>
              Minha trajetória na tecnologia começou com a formação técnica
              em Desenvolvimento de Sistemas pelo SENAI e continua atualmente
              na graduação em Análise e Desenvolvimento de Sistemas.
            </p>

            <p>
              Tenho interesse em diferentes áreas da tecnologia, especialmente
              desenvolvimento web e inteligência artificial.
              Gosto de transformar ideias em projetos práticos, explorar
              possibilidades e aprender durante cada etapa do processo.
            </p>

            <p>
              Acredito que a tecnologia vai além de ferramentas e linguagens:
              ela é uma forma de resolver problemas e criar novas experiências.
            </p>

            <div className="about-details">
              <div>
                <span>EM FORMAÇÃO</span>
                <strong>Análise e Desenvolvimento de Sistemas · UNIEINSTEIN</strong>
              </div>

              <div>
                <span>FORMAÇÃO TÉCNICA</span>
                <strong>Desenvolvimento de Sistemas · SENAI</strong>
              </div>

              <div>
                <span>LOCALIZAÇÃO</span>
                <strong>Limeira · São Paulo · Brasil</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="skills section-container">
          <div className="section-heading">
            <span className="section-label">03 / CONHECIMENTOS</span>
            <h2>
              Ferramentas que fazem parte da minha <span>jornada.</span>
            </h2>
            <p>
              Tecnologias e ferramentas com as quais já tive contato
              em estudos e projetos.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <span className="skill-tag" key={index}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="projects section-container" id="projetos">
          <div className="section-heading projects-heading">
            <div>
              <span className="section-label">04 / PROJETOS SELECIONADOS</span>
              <h2>
                Ideias que saíram <span>do papel.</span>
              </h2>
              <p>
                Projetos desenvolvidos durante minha jornada de aprendizado
                e experimentação na tecnologia.
              </p>
            </div>

            <span className="projects-count">03 PROJETOS</span>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-preview ${project.type}`}>
                  {project.type === "juris" && (
                    <img
                      src={jurisImage}
                      alt="Interface do JurisAI, assistente de análise de documentos jurídicos"
                      className="project-image"
                    />
                  )}

                  {project.type === "petcare" && (
                    <img
                      src={petcareImage}
                      alt="Dashboard do projeto PetCare desenvolvido no Power BI"
                      className="project-image"
                    />
                  )}

                  {project.type === "geek" && (
                    <img
                      src={geekImage}
                      alt="Interface da Loja Virtual Geek desenvolvida em React"
                      className="project-image"
                    />
                  )}
                </div>

                <div className="project-information">
                  <div className="project-meta">
                    <span>{project.category}</span>
                    <span>{project.number}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>{project.status}</span>
                    <span className="project-arrow">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-container" id="contato">
          <span className="section-label">05 / CONTATO</span>

          <h2>
            Se tiver <span>Interesse</span> entre em contato comigo
          </h2>

          <p>
            Estou aberta a oportunidades, conexões e novos desafios
            na área de tecnologia.
          </p>

          <a
            href="https://wa.me/5519988373737"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Entre em contato <span>↗</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#inicio" className="logo">
          <span className="logo-symbol">AN</span>

          <span className="logo-text">
            <strong>ANICK</strong>
            <small>TECHNOLOGY & DEVELOPMENT</small>
          </span>
        </a>

        <span className="footer-copy">
          © 2026 ANICK. Todos os direitos reservados.
        </span>

        <a href="#inicio" className="back-to-top">
          VOLTAR AO TOPO ↑
        </a>
      </footer>
    </>
  );
}

export default App;
