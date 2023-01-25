import React, { useState, useEffect } from "react";
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
      <p>{JSON.stringify(posts)}</p>
      {Array.isArray(posts)
       ? posts.map(post =>{
        return <Post key={post.id} post={post} />;
      })
    : null}
    </Container>
  );
  };
export default App;
