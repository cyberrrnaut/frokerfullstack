import React from 'react'

import { BlogPagetwo } from './BlogPagetwo'
import { Blogpage } from '../components/Blogpage'

export function BlogRecentpage() {
  return (
    <div>
        <Blogpage/>

        <BlogPagetwo title={`Popular Posts`}/>


    </div>
  )
}
