import { useEffect, useState } from "react"
const url = 'http://localhost:3030/jsonstore/todos'

export function Table() {
    const [task, setTask] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                setTask(Object.values(data))
            })
    }, [])
    console.log(task)
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            
            <tbody>
                {task.map(movie =>
                <tr className= {movie.isCompleted? "todo is-completed": "todo"}>
                    <td>{movie.text}</td>
                    <td>{movie.isCompleted? 'Completed': 'Incomplete'}</td>
                    <td className="todo-action">
                        <button className="btn todo-btn">Change status</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
};