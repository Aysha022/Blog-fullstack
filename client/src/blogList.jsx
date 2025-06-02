import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

export default function BlogList() {
    const [selected, setSelected] = useState(null);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/get-blogs")
            .then(data => setBlogs(data.data));
    }, []);

    return (
        <div className="size-full mt-10 space-y-4 relative">
            {selected ? <div className="absolute inset-0 p-5">
                <button className="cursor-pointer" onClick={() => setSelected(null)}>{"< "} Go Back</button>
                <br/>

                <h2 className="text-xl font-bold">
                    {selected.title}
                </h2>
                <p className="text-sm text-gray-500">By {selected.author}</p><br/>
                <p>{selected.content}</p>
            </div> : blogs.length === 0 ? <p className="text-center text-gray-500">No blogs yet.<br/><br/>Create a <Link
                    className="rounded-lg px-2 text-blue-600" to="/new">new</Link> one
                </p> :
                <div className="divide-y divide-gray-300">
                    {blogs.map(blog => (
                        <div key={blog._id} className="p-4" onClick={() => {
                            setSelected(blog);
                        }}>
                            <h2 className="text-xl font-bold">{blog.title}</h2>
                            <p className="line-clamp-2">{blog.content}</p>
                            <p className="text-sm text-gray-500">By {blog.author}</p>
                        </div>
                    ))}
                </div>}
        </div>
    );
}
