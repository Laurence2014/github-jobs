import React, { useState } from "react";
import useFetchPosts from "./useFetchPosts";
import { Container } from "react-bootstrap";
import Post from "./Post";

function App() {
  const [params, _setParams] = useState({})
  const [page, _setPage] = useState(1)
  const { posts, loading, error } = useFetchPosts(params, page);
  
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      {posts.map(post =>{
        return <Post key={post.id} post={post} />
      })}
    </Container>
  );
  };
export default App;
