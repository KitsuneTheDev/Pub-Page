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
            <div className="scroll-indicator-container mt-25 mb-25 w-full h-[10%] relative">
                <div className="absolute left-1/2 -translate-x-1/2"><p className="text-white font-c-source text-sm">Scroll Down</p></div>
                <div className="absolute top-[20px] left-[calc(50%-10px)] h-5 w-5 rounded-full border-[2px] border-gold-1 "></div>
                <div className="absolute h-10 w-[2px] bg-gold-1 top-[30px] left-[calc(50%-1px)] "></div>
            </div>
            <Menu />
            <Events />
            <About />
            <Contact />
            <footer className="footer h-[calc(165px/(1.618*2))] "></footer>
        </div>
    );
}