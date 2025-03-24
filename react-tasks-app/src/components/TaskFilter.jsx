const TaskFilter = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 mt-4 p-4 bg-white rounded-md">
                <button className="text-blue-600 cursor-pointer">All</button>
                <button className="hover:text-blue-600 cursor-pointer">Active</button>
                <button className="hover:text-blue-600 cursor-pointer">Completed</button>
            </div>
        </section>
    )
}

export default TaskFilter;