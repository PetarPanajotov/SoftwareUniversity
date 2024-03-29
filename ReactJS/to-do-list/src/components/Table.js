import { useEffect, useState } from "react"
import { LoadSpinner } from "./LoadSpinner";
const url = 'http://localhost:3030/jsonstore/todos'

export function Table() {
    const [task, setTask] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setTask(Object.values(data))
                setLoading(false)
            })
    }, [])

    
    function changeStatus(e) {
        const updateTask = task.map(item => {
            if (item._id === e.target.id) {
                item.isCompleted = !item.isCompleted
            }
            return item;
        })
        setTask(updateTask);
    }
    return (
        <>
            {loading ? <LoadSpinner /> : null}
            <table className="table">
                <thead>
                    <tr>
                        <th className="table-header-task">Task</th>
                        <th className="table-header-status">Status</th>
                        <th className="table-header-action">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {task.map(task =>
                        <tr className={task.isCompleted ? "todo is-completed" : "todo"} key={task._id}>
                            <td>{task.text}</td>
                            <td>{task.isCompleted ? 'Completed' : 'Incomplete'}</td>
                            <td className="todo-action">
                                <button className="btn todo-btn" onClick={changeStatus} id={task._id}>Change status</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
};