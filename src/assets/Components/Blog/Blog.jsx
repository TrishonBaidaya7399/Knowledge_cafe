import PropTypes from "prop-types"
const Blog = ({blog}) => {
    console.log(blog);
    return (
        <div>
            <h1>Blog</h1>            
        </div>
    );
};
Blog.PropTypes={

    blog: PropTypes.object.isRequired
}
export default Blog;