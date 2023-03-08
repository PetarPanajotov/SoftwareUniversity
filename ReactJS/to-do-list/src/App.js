import { AddNewTodo } from './components/AddNewTodo';
import { Footer } from './components/Footer';
import { LoadSpinner } from './components/LoadSpinner';
import { Navigation } from './components/Navigation';
import { Table } from './components/Table';

function App() {
    return (
        <>
            <Navigation />
            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>
                    <AddNewTodo />
                    <div className="table-wrapper">
                        {/* <LoadSpinner /> */}
                        <Table />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default App;
