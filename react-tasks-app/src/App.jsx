import IconCross from "./components/icons/IconCross";

const App = () => {
  return (
    <>
      <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
        <header className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="uppercase text-white text-2xl font-bold tracking-master my-5">Todo</h1>
            <button>
              Luna
            </button>
          </div>
          <form action="" className="flex bg-white rounded-lg px-4 py-4 mt-4 overflow-hidden gap-4 items-center">
            <span className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></span>
            <input 
              type="text" 
              placeholder="Create a new task..." 
              className="w-full text-gray-neutral outline-none"        
            />
          </form>
        </header>

        <main className="container mx-auto mt-8 px-4">
          <div className="flex-row gap-4 mt-2 bg-white rounded-md [&>article]:p-4">
            <article className="flex gap-4 items-center border-b border-b-gray-400">
              <button className="flex-none w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none ml-auto">
                <IconCross />
              </button>
            </article>
            <article className="flex gap-4 items-center border-b border-b-gray-400">
              <button className="flex-none w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none ml-auto">
                <IconMoon />
              </button>
            </article>
            <article className="flex gap-4 items-center border-b border-b-gray-400">
              <button className="flex-none w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
              <p className="text-gray-600 grow">Complete online Javascript course</p>
              <button className="flex-none ml-auto">
                <IconCross />
              </button>
            </article>
            
            <section className="flex justify-between items-center p-4">
              <span className="text-gray-400">5 items left</span>
              <button className="text-gray-400">Clear completed</button>
            </section>
          </div>          
        </main>

        <section className="container mx-auto mt-8 px-4">
          <div className="flex justify-center gap-4 mt-4 p-4 bg-white rounded-md">
            <button className="text-blue-600 cursor-pointer">All</button>
            <button className="hover:text-blue-600 cursor-pointer">Active</button>
            <button className="hover:text-blue-600 cursor-pointer">Completed</button>
          </div>
        </section>

        <p className="text-center mt-8">Drag and drop to reaorder list</p>
      </div>   
    
    </>
  );
};

export default App;