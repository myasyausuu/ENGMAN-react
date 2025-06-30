import {Header} from './components/header';
import {Main} from './pages/main';
import './App.css'
import {Routes, Route} from "react-router-dom";
import {Books} from './pages/books';
import {Navbar} from './components/navbar';

function App() {

    return (
        <>
            <Header/>
            <Navbar> </Navbar>
            <main>
                <Routes>
                    <Route index element={<Main/>}></Route>
                    <Route path='books' element={<Books/>}></Route>
                </Routes>
            </main>
        </>
    )
}

export default App
