import './App.css';
import NavBar from './components/NavBar';
import CarCarousel from './components/CarCarousel';
import { cars } from './Data/cars';

function App() {
  return (
    <div className="App">
      <NavBar />

      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Welcome to the World of Sports Cars</h1>
        <p className="hero-subtitle">
          Explore the most iconic performance cars by country , American muscle, Japanese tuners, and more.
        </p>
        <button
          className="hero-button"
          onClick={() => {
            const section = document.getElementById('american');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Explore Cars
        </button>
      </section>

      {/* Car Sections */}
      <main>
        {Object.entries(cars).map(([country, carList]) => (
          <section key={country} id={country} className="car-section">
            <h2>{country.charAt(0).toUpperCase() + country.slice(1)} Sports Cars</h2>
            <CarCarousel country={country} cars={carList} />
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer>
        <p>&copy; Created by Nasir, Alex, and Ishmail</p>
      </footer>
    </div>
  );
}

export default App;


