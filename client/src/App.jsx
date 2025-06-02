import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import AllBlogsPage from "./all.jsx";
import NewBlogPage from "./new.jsx";

function App() {
    return (
        <Router>
            <div className="p-10">
                <h1 className="text-2xl font-bold">Blogs - Fullstack Assignment</h1>
                <ul>
                    <li className="list-item"><Link to="/" className="hover:underline px-3">View all blogs</Link></li>
                    <li className=""><Link to="/new" className="hover:underline px-3">Create a new one</Link></li>
                </ul>
                <br/>
                <hr/>
                <Routes>
                    <Route path="/" element={<AllBlogsPage/>}/>
                    <Route path="/new" element={<NewBlogPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
