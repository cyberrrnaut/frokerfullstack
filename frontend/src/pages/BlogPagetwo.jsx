import { Cardthree } from "../components/Cardthree";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';


export function BlogPagetwo({title}) {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    async function fetchdata() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/list`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }

    fetchdata();
  }, []);

  
  const totalPages = Math.ceil(blogs.length / itemsPerPage);


  const currentBlogs = blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pt-10">
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl   mb-8">{title}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <Cardthree
            // key={blog.id}
            image={blog.image}
            author={blog.author}
            date={blog.date}
            title={blog.title}
            description={blog.description}
          />
          </Link>
         
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 text-lg font-medium rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
}
