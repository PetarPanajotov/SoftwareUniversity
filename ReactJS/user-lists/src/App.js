import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Pagination } from "./components/Pagination";
import { Search } from "./components/Search";
import { TableList } from "./components/TableList";

const url = 'http://localhost:3005/api/users';

function App() {
    const [peoples, setPeople] = useState([]);
    const [search, setSearch] = useState(null);
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setPeople(data.users))
    }, []);

    return (
        <>
            <Header />
            <main className="main">
                <section className="card users-container">
                    <Search peoples = {peoples} setSearch = {setSearch}/>
                    <TableList peoples = {peoples} url = {url} search = {search} />
                    <Pagination />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default App;
