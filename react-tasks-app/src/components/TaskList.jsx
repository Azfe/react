import IconCross from "./icons/IconCross";
import IconMoon from "./icons/IconMoon";

const TaskList = () => {
    return (
        <div className="mt-8 bg-white rounded-t-md [&>article]:p-4">
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
                    <IconMoon className="fill-red-600" />
                </button>
            </article>
            <article className="flex gap-4 items-center border-b border-b-gray-400">
                <button className="flex-none w-5 h-5 rounded-full border-2 inline-block text-gray-neutral"></button>
                <p className="text-gray-600 grow">Complete online Javascript course</p>
                <button className="flex-none ml-auto">
                    <IconCross />
                </button>
            </article>
        </div>
    )
}

export default TaskList;