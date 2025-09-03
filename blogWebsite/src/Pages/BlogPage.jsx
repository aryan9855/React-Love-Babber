import React from 'react'
import { useState } from 'react'
import { useLocation, useNavigation } from 'react-router-dom'
function BlogPage() {

    const [blogs, setBlogs] = useState(null)
    const [relatedBlogs, setRelatedBlogs] = useState([])
    const location = useLocation();
    const navigation = useNavigation(); 

  return (
    <div>
      
    </div>
  )
}

export default BlogPage
