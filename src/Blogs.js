import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogList from './BlogList';

function Blogs() {

    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const history = useNavigate();

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not get data for that resource.');
                }
                return res.json();
            }).then(data => {
                setBlogs(data);
                setError(null);
                setIsLoading(false);
            }).catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);


    function deleteHandler(id) {
        fetch('http://localhost:4000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            alert('Deleted!');
            const newBlogs = blogs.filter(item => item.id !== id);
            setBlogs(newBlogs);
        });
    }

    function updateHandler(blog) {
        let i = blogs.findIndex(item => item.id === blog.id);
        blogs[i].title = "Updated: " + blogs[i].title;
        setBlogs({...blogs});

        // let thisBlog = blogs.filter(b => b.id === blog.id);
        // console.log(thisBlog);
        // thisBlog.title = "Changed!";
        // console.log(thisBlog);

        // fetch('http://localhost:4000/blogs/' + blog.id, {
        //     method: 'PUT',
        //     body: JSON.stringify(thisBlog),
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(() => {
        //     alert('updated!');
        //     // const newBlogs = blogs.filter(item => item.id !== id);
        //     setBlogs(blogs);
        // });
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <div>Is loading data...</div>}
            {blogs && <BlogList blogs={blogs} deleteHandler={deleteHandler} updateHandler={updateHandler}/>}
        </div>
    );
}

export default Blogs;
