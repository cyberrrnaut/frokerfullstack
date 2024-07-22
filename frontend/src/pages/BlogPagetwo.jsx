import { Cardthree } from "../components/Cardthree";
import {useEffect, useState} from "react"
import axios from "axios"

export  function BlogPagetwo() {
  const [blogs,setBlogs] = useState([]);

  useEffect(()=>{
    async function fetchdata(){
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/list`);
    const data = response.data;
    setBlogs(data);
    }
 
 fetchdata() },[])

  return (
    <div>
       <h1>Recent Posts </h1>

       <div className="grid grid-cols-3 ">
        
      { blogs.map((blog)=>(
          
          <Cardthree  key={blogs.id} 
            image={blog.image}
            author={blog.author}
            date={blog.date}
            title={blog.title}
            description={blog.description}/>
          ))}
        
        </div> 
      
    </div>
  )
}




