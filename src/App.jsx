import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Chef from './components/Chef';
import GalleryFull from './components/GalleryFull';
import Menu from './components/Menu';
import Ambiance from './components/Ambiance';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Intro />
        <Chef />
        <GalleryFull />
        <Menu />
        <Ambiance />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
