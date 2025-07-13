import './navbar.css';

export default function Navbar() {
    return(
        <div className="navbar-container h-full w-full pt-2 pl-2 pr-2">
            <div className="logo-container h-full aspect-square relative">
                <img src="/logo.png" alt="" />
            </div>
            <div className="absolute right-4 top-4 flex flex-col gap-1">
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
            </div>
        </div>
    );
}