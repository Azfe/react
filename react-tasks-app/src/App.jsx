import IconCross from "./components/icons/IconCross";

const App = () => {
  return (
    <>
      <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-center bg-cover">
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
          <div className="bg-white rounded-md px-4">
          <article>
            <button className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
            <p className="text-gray-600">Complete online Javascript course</p>
            <button>
              <IconCross />
            </button>
          </article>
          <article>
            <button className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
            <p className="text-gray-600">Complete online Javascript course</p>
            <button>
              <IconCross />
            </button>
          </article>
          <article>
            <button className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
            <p className="text-gray-600">Complete online Javascript course</p>
            <button>
              <IconCross />
            </button>
          </article>
          <section>
            <span>5 items left</span>
            <button>Clear completed</button>
          </section>
          </div>          
        </main>

        <section className="container mx-auto px-4">
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </section>

        <p className="text-center">Drag and drop to reaorder list</p>
      </div>   
    
    </>
  );
};

export default App;