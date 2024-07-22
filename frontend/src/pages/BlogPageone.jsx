import { useEffect, useState } from "react";
import axios from "axios";
import { Cardone } from "../components/Cardone";
import Cardtwo from "../components/Cardtwo";
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
            <div className="flex">
                {blogs.length > 0 && (

                  <Link to={'/blogs/1'}> 
                   <Cardone
                        image={blogs[0].image}
                        author={blogs[0].author}
                        date={blogs[0].date}
                        title={blogs[0].title}
                        description={blogs[0].description}
                    />
                  </Link>
                   
                )}

                <div>
                    <Cardtwo />
                    <Cardtwo />
                </div>
            </div>
        </div>
    );
}
