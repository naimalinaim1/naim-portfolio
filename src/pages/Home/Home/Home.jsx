import Navbar from "../../Shared/Navbar/Navbar";
import Introduction from "../Introduction/Introduction";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
        <Introduction />
      </header>
      <main>
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Home;
