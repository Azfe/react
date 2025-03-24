import IconCross from "./icons/IconCross";

const TaskItem = ({ task }) => {

    const {id, title, completed} = task;

    return (
        <article className="flex gap-4 items-center border-b border-b-gray-400">
            <button className="flex-none w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
            <p className="text-gray-600 grow">
                {title}
            </p>
            <button className="flex-none ml-auto">
                <IconCross />
            </button>
        </article>
    )
}

export default TaskItem;