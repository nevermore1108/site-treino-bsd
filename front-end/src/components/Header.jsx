

export function Header() {
    return (
        <div className="h-12 sticky top-0 z-50 bg-violet-300 flex flex-row justify-between">
            <div className="flex flex-row justify-start max-md:hidden"> 
                <button className="h-14 ml-2 pb-2 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110 hover:text-shadow-lg/20 active:text-shadow-none active:scale-100">
                    Home
                </button>
                <button className="h-14 ml-2 pb-2 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110 hover:text-shadow-lg/20 active:text-shadow-none active:scale-100">
                    Personagens
                </button>
            </div>
            <div className="h-14 m-3 grow">Bungou Stray Dogs</div>
            <div className="flex flex-row justify-end gap-0 max-md:hidden">
                <button className="h-14 mr-1 pb-2 cursor-pointer overflow-hidden transition-transform duration-300 hover:scale-110 hover:text-shadow-lg/20 active:text-shadow-none active:scale-100">
                    <img
                        src="/instagram-logo.png"
                        alt="Logo Insta"
                        className="h-13"
                    />
                </button>
            </div>  
        </div>
    )
}