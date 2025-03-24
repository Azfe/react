import { useState } from "react";

const TaskCreate = ({ createTask }) => {

    const [title, setTitle] = useState('');

    const handleCreateTask = (e) => {
        e.preventDefault();        

        if(!title.trim()){
            return setTitle('');
        }

        createTask(title);
        setTitle('');
    }

    return (
        <form action="" onSubmit={handleCreateTask} className="flex bg-white rounded-lg px-4 py-4 mt-4 overflow-hidden gap-4 items-center">
            <span className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></span>
            <input
                type="text"
                placeholder="Create a new task..."
                className="w-full text-gray-neutral outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    )
}

export default TaskCreate;