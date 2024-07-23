import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function Blogpage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);

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
          setLiked(blogData[0].liked);
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
  }, [id,liked]);

  async function handleLike() {
    try {
      await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/like?id=${id}`, {
        liked: !liked
      });
      setLiked(!liked);

    } catch (error) {
      console.error(error);
    }
  }

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
    <div>
      <div className='pt-28 flex flex-col items-center'>
        <div>
          <div className='flex'>
            <h1 className='text-lg'>{"Blog>"}</h1>
            <h1 className='text-lg'>{blog.title}</h1>
          </div>
          <img className='rounded-3xl' src={blog.image} alt={blog.title} />
        </div>
      </div>
      <div className='flex justify-end mr-72 mt-4'>

        <div onClick={handleLike}
         className='cursor-pointer flex'>
          {liked? <img
          className='h-20 w-24 mb-4 '
          src={"https://static.vecteezy.com/system/resources/previews/012/689/022/original/love-react-icon-3d-render-free-vector.jpg"}
          alt="like"
         
        />:<img className='h-[50px] w-[50px] mr-6 mt-4' src="https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1707285106/Frokerassets/Artboard_ne0yo2.jpg"></img>}
        </div>
       
        <h1 className='text-xl pt-6'>{blog.likeCount}</h1>
        <h1 className='font-bold pl-3 text-xl pt-6'>Likes</h1>
      </div>
      <p>{blog.author}</p>
      <p>{blog.date}</p>
      <p>{blog.description}</p>
    </div>
  );
}
