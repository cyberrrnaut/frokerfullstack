import { useEffect, useState } from "react";
import axios from "axios";
import { Cardone } from "../components/Cardone";
import { Cardtwo } from "../components/Cardtwo";
import { Link } from 'react-router-dom';

export function BlogPageone() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/page1`);
                setBlogs(response.data);
            } catch (error) {
                console.error("Error fetching the data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
           <div className="flex items-center justify-center pb-5">
               <h1 className="text-4xl text-orange-500">Froker</h1>
               <h1 className="text-4xl pl-2">Blog</h1>
           </div>

           <h1 className="text-center text-5xl pb-3">Articles covering the most recent</h1>
           <h1 className="text-center text-5xl">updates and advancements</h1>
           
           <div className="flex items-center justify-center pt-9 gap-2">
               {blogs.length > 0 && (
                   <Link to={`/blogs/${blogs[0].id}`}> 
                       <Cardone
                           image={blogs[0].image}
                           author={blogs[0].author}
                           date={blogs[0].date}
                           title={blogs[0].title}
                           description={blogs[0].description}
                       />
                   </Link>
               )}

               <div className="flex flex-col gap-4">
                   {blogs.length > 1 && (
                       <Link to={`/blogs/${blogs[1].id}`}> 
                           <Cardtwo
                               image={blogs[1].image}
                               author={blogs[1].author}
                               date={blogs[1].date}
                               title={blogs[1].title}
                               description={blogs[1].description}
                           />
                       </Link>
                   )}

                   {blogs.length > 2 && (
                       <Link to={`/blogs/${blogs[2].id}`}> 
                           <Cardtwo
                               image={blogs[2].image}
                               author={blogs[2].author}
                               date={blogs[2].date}
                               title={blogs[2].title}
                               description={blogs[2].description}
                           />
                       </Link>
                   )}
               </div>
           </div>
        </div>
    );
}
