import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Blogpage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/list?id=${id}`);
        
        if (response.status !== 200) {
          throw new Error('Blog not found');
        }

        const blogData = response.data;
        if (blogData.length > 0) {
          setBlog(blogData[0]);
        } else {
          throw new Error('No blog data available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!blog) {
    return <div>No blog data available</div>;
  }

  return (
    <div className='pt-28'>
      {blog.image && (
        <img src={blog.image} alt={blog.title} />
      )}
      <h1>{blog.title}</h1>
      <p>{blog.author}</p>
      <p>{blog.date}</p>
      <p>{blog.description}</p>
    </div>
  );
}
