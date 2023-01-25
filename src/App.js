import React, { useState, useEffect } from "react";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import Job from "./Job";

function App() {
  const [params, _setParams] = useState({})
  const [page, _setPage] = useState(1)
  const { jobs, loading, error } = useFetchJobs(params, page);
  useEffect(() => console.log(jobs), [])
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try refreshing</h1>}
      <p>{JSON.stringify(jobs)}</p>
      {Array.isArray(jobs)
       ? jobs.map(job =>{
        return <Job key={job.id} job={job} />;
      })
    : null}
    </Container>
  );
  };
export default App;
