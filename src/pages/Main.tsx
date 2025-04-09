import "./Main.css";
import nsi from "../assets/nsi.png";

function Main() {


  return (
    <>
      <html className="scroll-smooth" id="main">
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 hidden md:flex">
          <div className="flex-1">
            <a href="#main" className="btn btn-ghost text-xl">
              Lilo NOEL
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              <li>
                <a
                  href="/react-blog/veille"
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Veille Technologique
                </a>
              </li>
              <li>
                <a
                  href="#presentation"
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Présentation
                </a>
              </li>
              <li>
                <a
                  href="#projet"
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Projets
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex md:hidden navbar bg-base-100 shadow-sm sticky top-0 z-50">
          <div className="flex-1">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a
                        className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                        href="/react-blog/veille"
                      >
                        Veille
                      </a>
                    </li>
                    <li>
                      <a
                        href="#presentation"
                        className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                      >
                        Présentation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#projet"
                        className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                      >
                        Projets
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div className="flex-none">
            <a href="#main" className="btn btn-ghost text-xl">
              Lilo NOEL
            </a>
          </div>
        </div>

        <section id="main" className="bg-base-200">
          <div className="mockup-window border border-base-300 w-full">
            <h1 className="text-5xl px-10 text-blue-400  mt-10">
              Bonjour,<h3 className="text-3xl text-white">je m'appelle</h3>
            </h1>
            <h2 className="text-6xl px-17 mt-2 text-blue-400">Lilo NOEL</h2>
            <h3 className="text-3xl px-10 mt-3 ">
              Je suis en 1ère année de BTS SIO à La Joliverie
            </h3>
            <h4 className="text-2xl px-10 mt-3 text-blue-200 max-w-300 mb-20">
              J'ai dans l'idée de perfectionner mes compétences dans le domaine
              de l'informatique pour me permettre de me rendre le plus utile
              possible
            </h4>
          </div>
        </section>

        <section
          id="presentation"
          className="bg-base-300 p-3 border-2 border-dashed border-blue-400"
        >
          <h1 className="text-6xl px-2 mb-5">Qui suis-je ?</h1>
          <div className="mockup-window border border-base-300 w-full p-10">
            <p className="text-xl text-justify max-w-250">
              Je suis un passionné d'informatique, ayant acquis une solide
              expérience en autodidacte dans des domaines variés tels que le
              JavaScript, le Python, le HTML et le CSS. Cette soif d'apprendre
              m'a naturellement conduit à poursuivre mes études en BTS Services
              Informatiques aux Organisations (SIO), où j'ai approfondi mes
              connaissances sur le développement d'applications sécurisées et la
              gestion des données de manière professionnelle.
              <br />
              <br />
              Ce parcours m'a permis de développer des compétences techniques
              robustes et d'acquérir une vision complète des enjeux liés à la
              sécurité et à l'optimisation des systèmes informatiques. Je suis
              convaincu que l'informatique est le domaine dans lequel je
              m'épanouis le plus et où je peux apporter ma contribution la plus
              significative, en alliant créativité, rigueur et expertise
              technique.
              <br />
              <br />
              Aujourd'hui, j'ai acquis de solides compétences en python,
              javascript, html, css, mais également en langages orientés objets
              tels que le C, le C++ ainsi que le C# dû à mes apprentissages
              personnels (également React et TypeScript) et l'approfondissement
              grâce à mes études et les différents projets (Java, PHP, ...)
            </p>
          </div>
        </section>

        <section id="projet" className="bg-base-200 p-3">
          <h1 className="text-6xl mt-10 mb-10 ml-3">Mes projets</h1>
          <div className="mockup-window border border-base-300 w-full p-10">
            <p className="text-xl text-blue-200">
              La plupart des projets que j'ai entrepris n'ont pas spécialement
              abouti. Mais ce n'est pas pour cela qu'ils ne m'ont pas apporté
              beaucoup ! Ils m'ont permis d'en apprendre plus sur certains
              langages et à comment réfléchir comme un développeur.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="card bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 transition-transform duration-500">
                <figure className="p-5">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
                    alt="Tic Tac Toe"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400">
                    Tic Tac Toe
                  </div>
                  <p className="text-justify text-lg">
                    Mon tout premier projet de code ! Il m'a permis de me
                    familiariser avec tout ce qui était développement web etc...
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://github.com/Aypixels/morpionstest"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="fill-current"
                        viewBox="0 -1 24 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                      <span>Lien du repos Github</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://jeu-de-tictactoe.glitch.me"
                      target="_blank"
                    >
                      <span> Voir le projet</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 transition-transform duration-500">
                <figure className="pb-10 pt-15">
                  <img src={nsi} alt="NSI" />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400">
                    Site NSI
                  </div>
                  <p className="text-justify text-lg">
                    C'était un projet pour la NSI. On avait la possibilité de
                    réaliser un site web sur le sujet de notre choix. Je me suis
                    donc dit qu'il serait intéressant de réaliser un site pour
                    faire découvrir la nsi. Ce projet m'a permis d'en apprendre
                    plus sur l'utilisation plus approfondi sur le css et le
                    html.
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://glitch.com/edit/#!/n-s-i"
                      target="_blank"
                    >
                      <img
                        className="max-w-10 px-2"
                        src="https://cdn.brandfetch.io/idhTADcu_T/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B"
                        alt="glitch"
                      />
                      <span>Lien du repos Glitch</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://n-s-i.glitch.me/"
                      target="_blank"
                    >
                      <span> Voir le projet</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 transition-transform duration-500">
                <figure>
                  <img
                    src="https://parametric-architecture.com/wp-content/uploads/2024/08/Architecture-Portfolio-Cover-1024x683.webp"
                    alt="Portfolio"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400">
                    Mon portfolio !
                  </div>
                  <p className="text-justify text-lg">
                    La création de mon portfolio était une expérience vraiment
                    enrichissante ! Elle m'a permis de revoir un peu tous les
                    projets que j'ai entrepris et ça m'a vraiment fait du bien,
                    m'a rappelé de bons souvenirs et m'a permis de continuer a
                    revoir le css et le html !
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://github.com/Aypixels/morpionstest"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="fill-current"
                        viewBox="0 -1 24 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                      <span>Lien du repos Github</span>
                    </a>
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://jeu-de-tictactoe.glitch.me"
                      target="_blank"
                    >
                      <span> Voir le projet</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-6xl mt-10 mb-10 ml-3">Les projets au BTS SIO</h1>
          <div className="mockup-window border border-base-300 w-full p-10">
            <p className="text-xl text-blue-200">
              Les projets que j'ai réalisé en BTS SIO m'ont permis de me
              perfectionner dans le domaine de l'informatique. J'ai pu apprendre
              à travailler en équipe, à gérer des projets de A à Z et à
              m'organiser.
            </p>
            <p className="text-4xl mt-5">
              1<sup>ère</sup> année
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card glass bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 transition-transform duration-500">
                <figure className="p-5">
                  <img
                    src="https://talks.freelancerepublik.com/wp-content/uploads/2021/05/python_logo.png"
                    alt="Python"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400">
                    Projet Python
                  </div>
                  <p className="text-justify text-lg">
                    Ce projet nous a permis d'appliquer les notions vues en
                    cours, et de les approfondir. Nous avons dû réaliser un
                    programme en python qui permettait de gérer une base de
                    données. et d'en automatiser les tâches...
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://drive.google.com/drive/folders/1OaCqCRy6SjHdTuRUVJqk3oJZ-D4-LNAH?usp=sharing"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="fill-current"
                        viewBox="0 -1 24 16"
                      >
                        <path d="M5 1.5L0.5 9.5L2.5 13.5M5 1.5L7.5 5.5L2.5 13.5M5 1.5H10L14.5 9.5M5 1.5L10 9.5H14.5M2.5 13.5L5 9.5H14.5M2.5 13.5H12.5L14.5 9.5" />
                      </svg>
                      <span>Drive du projet</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card glass bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 transition-transform duration-500">
                <figure className="pb-10 pt-20">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
                    alt="Intranet"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400 pt-10">
                    Intranet
                  </div>
                  <p className="text-justify text-lg">
                    Notre projet était de créer un intranet pour une entreprise
                    nommée Corpany, on y a appris a gérer des bases de données
                    relationnelles, avec les schémas ainsi que les connections,
                    les sessions, etc... Tout cela en php !
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://jolsio.fr:4456/noell/public/frontend/"
                      target="_blank"
                    >
                      <span> Voir le projet</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="card glass bg-base-100 shadow-xl mt-10 max-w-100 hover:scale-105 hover:-translate-y-2 transition-transform duration-500 ">
                <figure>
                  <img
                    src="https://sc.filehippo.net/images/t_app-icon-l/p/2f4c04f4-96d0-11e6-9830-00163ed833e7/3163796423/jre_32-logo"
                    alt="Jave"
                  />
                </figure>
                <div className="card-body">
                  <div className="card-title text-3xl text-blue-400">
                    Projet Java (Thali)
                  </div>
                  <p className="text-justify text-lg">
                    Ce projet nous a permis de découvrir le langage Java, et de
                    réaliser un projet en équipe. Nous avons dû réaliser un
                    programme qui permettait de gérer une base de données, et
                    d'y intégrer une base de donnée à l'aide des outils de swing
                    et Netbeans.
                  </p>
                  <div className="inline-flex card-actions">
                    <a
                      className="inline-flex items-center justify-center p-3 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-blue-300 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-blue-500 dark:hover:text-white max-w-100 hover:transition-all duration-500"
                      href="https://drive.google.com/drive/folders/1aAYJw9VKe8vi3lftO81DEeI_XC5Ay8WG?usp=sharing"
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        className="fill-current"
                        viewBox="0 -1 24 16"
                      >
                        <path d="M5 1.5L0.5 9.5L2.5 13.5M5 1.5L7.5 5.5L2.5 13.5M5 1.5H10L14.5 9.5M5 1.5L10 9.5H14.5M2.5 13.5L5 9.5H14.5M2.5 13.5H12.5L14.5 9.5" />
                      </svg>
                      <span>Drive du projet</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10"
        >
          <aside>
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              className="fill-current"
            >
              <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>
              Lilo NOEL
              <br />
              Étudiant en développement informatique
            </p>
            <p className="mt-5 text-blue-200">
              Ce site à été créé dans le cadre d'un TP en BTS SIO
            </p>
          </aside>

          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/Aypixels"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/noel_lilo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100092222206546"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/lilo-noël-2a81282a8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>

              {/* Email */}
              <a href="mailto:lilo.noel44@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  fill="currentColor"
                  className="fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0" />
                  <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3" />
                </svg>
              </a>
            </div>
          </nav>
        </footer>
      </html>
    </>
  );
}

export default Main;
