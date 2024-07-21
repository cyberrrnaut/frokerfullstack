import { Pageeight } from "./pageeight"
import { Pagefive } from "./Pagefive"
import { Pagefour } from "./Pagefour"
import { Pageone } from "./Pageone"
import { Pageseven } from "./Pageseven"
import { Pagesix } from "./Pagesix"
import { Pagethree } from "./Pagethree"
import { Pagetwo } from "./Pagetwo"

function Homepage() {
  return (
    <div>
        
        <Pageone />
        <Pagetwo />
        <Pagethree/>
        <Pagefour/>
        <Pagefive/>
        <Pagesix/>
         <Pageseven/>
         <Pageeight/>
    </div>
  )
}

export default Homepage