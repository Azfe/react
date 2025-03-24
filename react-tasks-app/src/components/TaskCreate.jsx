const TaskCreate = () => {
    return (
        <form action="" className="flex bg-white rounded-lg px-4 py-4 mt-4 overflow-hidden gap-4 items-center">
            <span className="w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></span>
            <input
                type="text"
                placeholder="Create a new task..."
                className="w-full text-gray-neutral outline-none"
            />
        </form>
    )
}

export default TaskCreate;