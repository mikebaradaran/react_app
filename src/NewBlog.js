import { useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import "./NewBlog.css";
import generateID from './utils/generateID';
import { AppContext } from "./context";
import Card from "./Card";

function NewBlog(props) {
    const { age } = useContext(AppContext);

    const { title, setTitle } = useState('');
    const { body, setBody } = useState('');

    const authorRef = useRef();
    const titleRef = useRef();
    const bodyRef = useRef();

    const history = useNavigate();

    function submitHandler(event) {
        event.preventDefault();
        // id: generateID(),  jspn-server generated the id
        const data = {
            title: titleRef.current.value,
            author: authorRef.current.value,
            body: bodyRef.current.value
        };
        addBlog(data);
    }

    function addBlog(data) {
        fetch('http://localhost:4000/blogs', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then( () => { history('/') } );
    }

    // const getMyBlogs = async () => {
    //     let url = "http://localhost:4000/blogs";
    //     const res = await fetch(url);
    //     const myBlogs = await res.json();
    //     console.log(myBlogs);
    // }

    return (
        <Card>
            <form onSubmit={submitHandler}>
                <h3>age is {age}</h3>
                <label>Title</label>
                <input type="text" value={title} required ref={titleRef} />
                <label>Author</label>
                <input type="text" value={title} required ref={authorRef} />
                <label>Body</label>
                <input type="text" value={body} required ref={bodyRef} />
                <button>Add blog</button>
            </form>
        </Card>
    );
}

export default NewBlog;