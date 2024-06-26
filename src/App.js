
import './App.css';
import Footer from './componentes/section/Footer';
import NavBar from './componentes/section/NavBar';
import Presentation from './componentes/section/Presentation';
import Project from './componentes/section/Project';
import Skills from './componentes/section/Skills';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Presentation/>
        <Skills/>
        <Project/>
        <Footer/>
    </div>
  );
}

export default App;
