
import BlogCard from "../../components/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";

const AllBlogs = () => {
  const [filter, setFilter] = useState('');
  const [allBlog, setAllBlog] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
  console.log(count)
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:5000/all-blogs?page=${currentPage}&filter=${filter}&search=${search}`
      )
      setAllBlog(data)
    }
    getData()
  }, [filter, setAllBlog,search,currentPage])

  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(`http://localhost:5000/blog-count?filter=${filter}&search=${search}`
      )

      setCount(data.count)
    }
    getCount()
  }, [filter, search])

  const handleSearch = e => {
    e.preventDefault()

    setSearch(searchText)
  }

 
  return (
    <div>
       <div>
        <div className='flex flex-col md:flex-row justify-center items-center gap-5 mb-10 bg-gray-200 rounded-2xl py-4'>
          <div>
            <select
             onChange={e => {
              setFilter(e.target.value)
              setCurrentPage(1)
            }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='Travel'>Travel</option>
              <option value='Remote Work'>Remote Work</option>
              <option value='Health'>Health</option>
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
              <input
                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                onChange={e => setSearchText(e.target.value)}
                value={searchText}
                type='text'
                name='search'
                placeholder='Enter Blog Title'
                aria-label='Enter Blog Title'
              />

              <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#1E677C] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                Search
              </button>
            </div>
          </form>
          </div>
          </div>
          
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
       {
        allBlog.map(blog=><BlogCard
        key={blog._id}
        blog={blog}
        ></BlogCard>)
       }
    </div>
    </div>
  );
};

export default AllBlogs;
