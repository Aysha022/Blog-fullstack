require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO);

const blogsSchema = new mongoose.Schema({
    title: String,
    content: String,
    author: String,
});

const blogs = mongoose.model('blogs', blogsSchema);

app.get('/get-blogs', async (req, res) => {
    const allBlogs = await blogs.find();
    res.json(allBlogs);
})

app.post('/create-blog', async (req, res) => {
    const author = req.body.author;
    const content = req.body.content;
    const title = req.body.title;

    await new blogs({
        title: title,
        author: author,
        content: content,
    }).save();

    res.json({
        msg: 'Successfully created new blog',
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});