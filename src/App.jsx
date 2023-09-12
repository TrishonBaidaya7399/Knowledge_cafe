import './App.css'
import Blogs from './assets/Components/Blogs/Blogs'
import Bookmarks from './assets/Components/BookMarks/Bookmarks'
import Header from './assets/Components/Header/Header'

function App() {

  return (
    <>
    {/* Header Section */}    
      <Header></Header>
    {/* Blogs section */}
    <div className='md:flex mx-[200px]'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
    </div>
    </>
  )
}

export default App
