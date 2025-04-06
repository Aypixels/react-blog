import "./Main.css";

function Veille() {
  return (
    <>
      <div className="scroll-smooth" id="veille">
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50 hidden md:flex">
          <div className="flex-1">
            <a href="#veille" className="btn btn-ghost text-xl">
              Lilo NOEL
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal">
              <li>
                <a
                  href={ window.location.origin + "/react-blog" }
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Accueil
                </a>
              </li>
              <li>
                <a
                  href="#veille"
                  className="text-xl px-3 hover:bg-base-200 rounded-lg hover:text-blue-300"
                >
                  Veille
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

        <div className="block md:hidden navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

        <section id="themes" className="bg-base-200 p-10">
          <h1 className="text-6xl mb-5 text-blue-400">Veille Technologique</h1>
          <p className="text-2xl text-blue-200">Comment l'émergence des outils no-code et des technologies d'IA redéfinit elle le rôle des développeurs web, et quelles sont les implications pour leur avenir professionnel ?</p>
          <div className="mockup-window border border-base-300 w-full p-10">
            <p className="text-xl text-justify">
              La veille technologique est essentielle pour rester à jour dans un
              domaine en constante évolution. Voici quelques thèmes que j'ai
              explorés :
            </p>
            <ul className="list-disc list-inside mt-5 text-lg">
              <li>Intelligence Artificielle et Machine Learning</li>
              <li>Développement Web : Frameworks modernes (React, Vue, Angular)</li>
              <li>Cybersécurité et protection des données</li>
              <li>Cloud Computing et services dématérialisés</li>
              <li>Blockchain et technologies décentralisées</li>
            </ul>
          </div>
        </section>

        <section id="veille" className="bg-base-300 p-10">
          <h1 className="text-6xl mb-5">Veille</h1>
          <div className="mockup-window border border-base-300 w-full p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <img
                        src="https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Screenshots/illustrations/illustration-ia-machine-learning.jpg"
                        alt="IA"
                        className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Intelligence Artificielle</h2>
                        <p>
                        L'IA transforme le développement web en automatisant des
                        tâches et en améliorant l'expérience utilisateur.
                        </p>
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
        </footer>
      </div>
    </>
  );
}

export default Veille;