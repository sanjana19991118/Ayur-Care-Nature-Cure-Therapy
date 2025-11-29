import React, { useState , useEffect} from 'react'
import axios from 'axios'
import Posts from '../src/Posts'
import Pagination from './Pagination';


function Page() {
     const[posts, setPosts] = useState([]);
     const[loading, setLoading] = useState(false);
     const[currentPage, setCurrentPage] = useState(1);
     const [postsPerPage, setPostsPerPage] = useState(10);

     useEffect(() => {
         const fetchPosts = async () => {
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // console.log('r', res.data)
            setPosts(res.data)
            setLoading(false)
         }
             fetchPosts()
     }, [])

    //  console.log('p', postsPerPage)

     const indexOfLastPost = currentPage * postsPerPage;

     const indexOfFirstPost = indexOfLastPost - postsPerPage;

     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

     const paginate = (pageNumbers) => {
        setCurrentPage(pageNumbers)
     }
    //  console.log('p', postsPerPage)

     return (
         <div className="container mt-5">
            <h1 className="text-primary mb-3">My Posts</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Posts posts={currentPosts} loading={loading} />
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
         </div>
     )

   }

   export default Page