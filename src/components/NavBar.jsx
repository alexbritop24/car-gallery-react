import "../App.css";

export default function NavBar() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">🏎 World of Sports Cars</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#american">American</a></li>
            <li><a href="#japanese">Japanese</a></li>
            <li><a href="#british">British</a></li>
            <li><a href="#german">German</a></li>
            <li><a href="#korean">Korean</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          🌓
        </button>
      </div>
    </header>
  );
}

