import Header from "./components/Header";
import TaskComputed from "./components/TaskComputed";
import TaskCreate from "./components/TaskCreate";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <>
      <div className="bg-[url('./src/assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat min-h-screen">
        
        <Header />

        <main className="container mx-auto mt-8 px-4">         
          <TaskCreate />
          <TaskList />
          <TaskComputed />
          <TaskFilter />
        </main>      

        <footer className="text-center mt-8">Drag and drop to reorder list</footer>
      </div>    
    </>
  );
};

export default App;