import { React } from "react";
import NavBar from "../components/Navbar/Navbar";
import Aboutme from "../components/About Me/Aboutme";
import Technologies from "../components/Technologies/tech";
import Projects from "../components/Work/Work";
import "./Home.css";
import Footer from "../components/Footer/footer";

function Home() {
  return (
    <>
      <div>
        <NavBar />

        <body id="body-color">
          <Aboutme />
          <Technologies />
          <Projects />
          <Footer />
        </body>
      </div>
    </>
  );
}

export default Home;
