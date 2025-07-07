import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Menu from "./menu/Menu.jsx";
import Events from "./events/Events.jsx";
import Contact from "./contact/Contact.jsx";
import Navbar from "./navbar/Navbar.jsx";

export default function Layout() {

    return(
        <div className="layout-container h-full w-full flex flex-col bg-black">
            <header className="header h-[calc(165px/(1.618*2))] w-full">
                <Navbar />
            </header>
            <Hero />
            <Menu />
            <Events />
            <About />
            <Contact />
            <footer className="footer h-[calc(165px/(1.618*2))] "></footer>
        </div>
    );
}