import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types"

const Blogs = ({handleBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=> res.json())
        .then(data => setBlogs(data))
    
    },[])
    return (
        <>
        <div className="lg:w-2/3 ">
        <h1 className="mt-8 text-gray-700 text-xl md:text-2xl font-bold">Available Blogs: {blogs.length}</h1>
            {blogs.map((blog, idx) => <Blog key={idx} blog={blog} handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)}
        </div>
        </>
    );
};
Blogs.propTypes={
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;