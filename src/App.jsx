import {Header} from './components/header';
import {Categories} from './components/categories';
import {Main} from './pages/main';
import './App.css'
import {Routes, Route} from "react-router-dom";
import {Books} from './pages/books';

function App() {

    return (
        <>
            <Header/>

            <main>
                <Categories/>
                <Routes>
                    <Route index element={<Main/>}></Route>
                    <Route path='books' element={<Books/>}></Route>
                </Routes>
            </main>
        </>
    )
}

export default App
