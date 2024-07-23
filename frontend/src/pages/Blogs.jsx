import { BlogPageone } from "./BlogPageone";
import { BlogPagetwo } from "./BlogPagetwo";


export function Blogs() {
  return (
    <div className="pt-28">
      
      <BlogPageone/>
      <BlogPagetwo title={`Recent Posts`}/>

      
    </div>
  )
}

