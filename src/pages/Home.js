import { React } from "react";
import NavBar from "../components/Navbar/Navbar";
import Aboutme from '../components/About Me/Aboutme';
import Technologies from "../components/Technologies/tech";
import Projects from "../components/Work/Work";
import './Home.css'

function Home() {
  return (
    <>
      <div>
        <NavBar />
        <body>
        <Aboutme />
        </body>
        <Technologies />
        <Projects />
        
      </div>
    </>
  );
}


export default Home;
