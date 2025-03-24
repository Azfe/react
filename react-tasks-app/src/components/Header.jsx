import IconMoon from "./icons/IconMoon";

const Header = () => { 
    return(
        <header className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="uppercase text-white text-2xl font-bold tracking-master my-5">Todo</h1>
            <button>
                <IconMoon className="fill-red-400" />
            </button>
          </div>
        </header>
    )
 }

 export default Header;