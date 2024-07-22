import axios from 'axios';
import  { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';


export function Blogpage() {
   
    const {id} = useParams();   
    const [blog, setBlog] = useState({}); 
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(true);


     useEffect(() => {
        async function fetchBlog() {
         
          try {
           
            const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/blogs/${id}`); 
            if (!response.ok) throw new Error('Blog not found');
           
            setBlog(response);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        }
    
        fetchBlog()
      }, [id]);

  return (
    <div>
    
    <img src={blog.image} alt="" />

    </div>
  )
}
