import IconCheck from "./icons/IconCheck";
import IconCross from "./icons/IconCross";

const TaskItem = ({ task }) => {

    const { id, title, completed } = task;

    return (
        <article className="flex gap-4 items-center border-b border-b-gray-400">            
            <button
                className={`flex-none w-5 h-5 rounded-full text-gray-neutral border-2
                    ${completed ?
                        "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center"
                        :
                        "inline-block"
                    }`}
            >
                {
                    completed && <IconCheck />
                }
            </button>
            <p className="text-gray-600 grow">
                {title}
            </p>
            <button className="flex-none ml-auto">
                <IconCross />
            </button>
        </article >
    )
}

export default TaskItem;