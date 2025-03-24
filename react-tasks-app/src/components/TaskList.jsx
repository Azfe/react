import IconCross from "./icons/IconCross";
import TaskItem from "./TaskItem";

const TaskList = ({tasks}) => {
    return (
        <div className="mt-8 bg-white rounded-t-md [&>article]:p-4">            
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}                       
        </div>
    )
}

export default TaskList;