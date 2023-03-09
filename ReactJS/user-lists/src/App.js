import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { TableList } from "./components/TableList";
function App() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <div className="table-wrapper">
                        <TableList />
                    </div>
                        <button className="btn-add btn">Add new user</button>
                </section>
            </main>
        </>
    )
}

export default App;
