import {useState} from "react";
import axios from "axios";

export default function CreateBlog() {
    const [formData, setFormData] = useState({title: "", content: "", author: ""});
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/create-blog", formData);
        alert("Created a new blog");
        setFormData({title: "", content: "", author: ""});
    };

    return (
        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <label htmlFor="title">Title</label>
            <input name="title" placeholder="Title" value={formData.title} onChange={handleChange}
                   className="w-full p-2 border rounded"/>
            <label htmlFor="author">Author</label>
            <input name="author" placeholder="Author" value={formData.author} onChange={handleChange}
                   className="w-full p-2 border rounded"/>
            <label htmlFor="author">Content</label>
            <textarea name="content" placeholder="Content" value={formData.content} onChange={handleChange}
                      className="w-full p-2 border rounded h-[300px]"/>
            <div className="w-full text-center">
                <button type="submit" className="border border-black mx-auto px-4 py-2 rounded">
                    Create
                </button>
            </div>
        </form>
    );
}
