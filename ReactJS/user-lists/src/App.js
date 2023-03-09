import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { TableList } from "./components/TableList";
function App() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                    <TableList />
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
