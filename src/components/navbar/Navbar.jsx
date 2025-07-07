import './navbar.css';

export default function Navbar() {
    return(
        <div className="navbar-container h-full w-full relative">
            <div className="absolute left-4 top-4"><h1 className="text-white">logo</h1></div>
            <div className="absolute right-4 top-4"><p className="text-white">menu</p></div>
        </div>
    );
}