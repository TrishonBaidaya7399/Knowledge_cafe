import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title}= bookmark;
    console.log(bookmark);
    if (Object.keys(bookmark).length > 0) {
        console.log(`if`, bookmark.length);
        return (
          <div className='bg-white rounded p-5 mb-4'>
            <h1 className="text-[16px] font-semibold text-gray-700">{title}</h1>
          </div>
        );
    } 
    };
Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
}
export default Bookmark;