
export function Cardone({image, author , date, title, description}) {
  return (
    <div>
       
       <img src={image} alt="" />

       {author}
       {date}

       {title}

       {description}

       Read More...

    </div>
  )
}

