import './navbar.css';

export default function Navbar() {
    return(
        <div className="navbar-container h-full w-full pt-2 pl-2 pr-2">
            <div className="logo-container h-full aspect-square relative">
                <div className='absolute w-[30%] h-[30%] border-[2px] border-purple-500 z-2 rotate-45 left-1/2 -translate-x-1/2 top-2 '></div>
                <div className='absolute w-[40%] h-[40%] border-[2px] border-green-700 rotate-45 left-1/2 -translate-x-1/2 top-3 '></div>
                <div className='absolute w-[60%] h-[2px] bg-green-700 left-1/2 -translate-x-1/2 top-[calc(70%+0.04rem)] '></div>
                <div className='absolute w-[20%] h-[2px] bg-green-700 left-[14%] rotate-315 -translate-x-1/2 top-[calc(70%+0.05rem+3px)] '></div>
                <div className='absolute w-[20%] h-[2px] bg-green-700 left-[86%] rotate-45 -translate-x-1/2 top-[calc(70%+0.05rem+3px)] '></div>
                <div className='absolute w-[2px] h-[20px] bg-green-700 left-[50%] -translate-x-1/2 top-[calc(70%+0.05rem+1px)] '></div>
            </div>
            <div className="absolute right-4 top-4 flex flex-col gap-1">
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
                <span className='h-[1px] w-7 border-[1px] border-gold-1 rounded-md '></span>
            </div>
        </div>
    );
}