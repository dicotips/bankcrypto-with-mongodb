function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="./index.html">
        <img src="./_img/bitcoin_logo.png" width="30" height="30" />
        Bank-Crypto
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className="nav-link" href="#/createAccount/">Crear Cuenta</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/login/">Iniciar Sesion</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">Depositos</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">Retiros</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#/allData/">Todos los Datos</a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
