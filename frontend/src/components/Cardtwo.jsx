

export function Cardtwo({image, author , date, title, description}) {
  return (
    <div className="flex gap-2">
         
          
  
    <img className="h-[250px] w-[335px] rounded-xl" src={image} alt="" />

    <div>
    
  <h1 className="text-orange-500 pt-3"> {author} - {date}</h1>
 
   
 <h1 className="font-bold pt-2">   {title}</h1>
 <h1 className="pt-2">   {description}</h1>



  <h1 className="text-orange-500 font-bold underline pt-2" > Read More...</h1>


    </div>

    

 </div>
  )
}



  