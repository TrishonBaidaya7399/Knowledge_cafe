import PropTypes from "prop-types"
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleBookmark,handleMarkAsRead}) => {
    const {id, title,cover_image,author_name,author_img,posted_date,reading_time,hash_tags}= blog
    return (
        <div className="border-b-2 border-gray-300 pb-[32px] mb-[40px] mt-[34px]">
            <img className="w-full mb-[18px]" src={`${cover_image} of post id ${id}`} />
            <div className="flex justify-between items-center mb-[16px]">
              <div className="flex items-center justify-start gap-[24px]">
                <img className="border-2 border-blue-700 rounded-full w-[60px]" src={author_img} alt={`Author ${author_name}'s image`} />
                <div>
                    <h2 className="text-[24px] font-bold">{author_name}</h2>
                    <p className="text-gray-500">{posted_date}</p>
                </div>
              </div>
            <div className="flex gap-2">
            <p className="text-gray-500">
                {reading_time} min read
            </p>
            <button onClick={()=>handleBookmark(blog)} className="text-gray-600 text-2xl"><FaBookmark></FaBookmark></button>

            </div>
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-[16px]">{title}</h1>
                <p className="mb-[27px]">{
                    hash_tags.map((hash, idx)=> <span key={idx}><a className="text-gray-500" href="">#{hash} </a></span>)
                }</p>
                <button className="text-[16px] text-blue-500 font-semibold" onClick={()=> handleMarkAsRead(reading_time, id)}>
                <u>Mark as read</u>
                </button>
            </div>          
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;