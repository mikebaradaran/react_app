import Card from "./Card";
import "./Card.css"

function BlogList(props) {

    const blogList = props.blogs.map(blog => {
        return (
            <div key={blog.id} className="card">
                <div>Title: {blog.title}</div>
                <div>Author: {blog.author}</div>
                <div>Body: {blog.body}</div>
                <button onClick={() => props.deleteHandler(blog.id)} >Delete</button>
                <button onClick={() => props.updateHandler(blog)} >Update</button>
            </div>
        )
    });
    return blogList;
}

export default BlogList;
