import './app.scss';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Contacts from "./components/contacts/Contacts";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Projects/>
        <About/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
