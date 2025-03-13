import { useState } from "react"

export function ToDoList() {
    const [taskName, setTaskName] = useState("")
    const [tasks, setTasks] = useState(["Task A", "Task B", "Task C"])

    function handleTaskName(e) {
        setTaskName(t => e.target.value)
    }

    function handleTaskCreate() {
        setTasks(t => [...t, taskName])
    }

    function handleTaskDelete(index) {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(t => newTasks)
    }

    function handleMoveTaskUp(index) {
        if (index < 1) { return }

        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
            return newTasks;
        });
    }

    function handleMoveTaskDown(index) {
        if (index >= tasks.length - 1) { return }

        setTasks(prevTasks => {
            const newTasks = [...prevTasks];
            [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
            return newTasks;
        });
    }

    return (
        <>
            <h1>ToDo List</h1>

            <input value={taskName}
                placeholder="Enter Task"
                onChange={handleTaskName}
                className="text-box">
            </input>

            <button onClick={handleTaskCreate} className="create-btn">
                Create
            </button>

            <ol>
                {tasks.map((task, index) => <li key={index} className="task">
                    {task}
                    <div className="btn">
                        <button onClick={() => handleTaskDelete(index)}>Del</button>
                        <button onClick={() => handleMoveTaskUp(index)}>↑</button>
                        <button onClick={() => handleMoveTaskDown(index)}>↓</button>
                    </div>

                </li>)}
            </ol>
        </>
    )
} 