import Navbar from "./components/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Jobs from "./components/jobs/jobs"
import Contact from "./components/contact/contact";
function App() 
{
    return(
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <Jobs />
            <Contact />
        </div>
    );
 
}

export default App  
