import PropTypes from "prop-types"
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
    <>
        <div className="w-full md:w-1/3 ">
        <div className="mt-0 md:mt-[95px] rounded-lg bg-gray-100 p-[10px] lg:px-[20px] lg:py-[30px] h-max border-2 border-[#6047EC]">
         <h1 className="text-xl lg:text-2xl text-[#6047EC] font-bold text-center">Spent time on read : {readingTime} min</h1>   
        </div>
        <div className="mt-6 rounded-lg bg-gray-100 px-[30px] py-[30px] h-max">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-700 mb-2">Bookmarked Blogs: {bookmarks.length>0 ?`${bookmarks.length}`:'Empty'} </h1>
            <div>
                {
                    bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark} ></Bookmark>)
                }
            </div>
        </div>
        </div>
    </>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    handleMarkAsRead: PropTypes.object,
    readingTime: PropTypes.object
};

export default Bookmarks;