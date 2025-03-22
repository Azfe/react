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
          <form action="">
            <input type="text" placeholder="Create a new task..."/>
          </form>
        </header>

        <main className="container mx-auto px-4">
          <article>
            <button>Círculo</button>
            <p>Complete online Javascript course</p>
            <button>exis</button>
          </article>
          <article>
            <button>Círculo</button>
            <p>Complete online Javascript course</p>
            <button>exis</button>
          </article>
          <article>
            <button>Círculo</button>
            <p>Complete online Javascript course</p>
            <button>exis</button>
          </article>
          <section>
            <span>5 items left</span>
            <button>Clear completed</button>
          </section>
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