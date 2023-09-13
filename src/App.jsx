import { useEffect, useState } from 'react'
import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/BookMarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks]=useState([])
  const [readingTime, setReadingTime]=useState(0)
  
  const handleBookmark = blog=>{
  const newBookmarks= [...bookmarks, blog];
  setBookmarks(newBookmarks);  
}
const handleMarkAsRead= (time, id) =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
  console.log(newReadingTime);
  // remove the read blog from the bookmark
  // console.log(`remove`, id);
  const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id)
  setBookmarks(remainingBookmarks);

}

  return (
    <>
    {/* Header Section */}    
      <Header></Header>
    {/* Blogs section */}
    <div className='md:flex mx-[30px] lg:mx-[150px] md:gap-6 mb-[30px] md:mb-0'>
      <Blogs handleBookmark={handleBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
