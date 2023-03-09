import { Header } from "./components/Header";
import { Search } from "./components/Search";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search />
                </section>
            </main>
        </>
    )
}

export default App;
