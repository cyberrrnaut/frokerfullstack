


export function Cardthree({image, author , date, title, description}) {
  return (
    <div className="">
       
        

       <img className="h-[367px] w-[432px] rounded-xl" src={image} alt="" />
  
     <h1 className="text-orange-500 pt-3"> {author} - {date}</h1>
    
      
       <h1 className="font-bold pt-2">   {title}</h1>
       <h1 className="pt-2 max-w-[432px]">   {description}</h1>
      

     
        <h1 className="text-orange-500 font-bold underline pt-2" > Read More...</h1>
       

    </div>
  )
}


