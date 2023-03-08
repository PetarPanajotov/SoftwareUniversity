import { AddNewTodo } from './components/AddNewTodo';
import { LoadSpinner } from './components/LoadSpinner';
import { Navigation } from './components/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <AddNewTodo />
                    <div className="table-wrapper">
                        <LoadSpinner />
                    </div>
                </section>
            </main>
        </>
    )
}

export default App;
