import './App.css';
import {useState, useEffect} from "react";

// https://api.github.com/users/pepeamaya

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1> Loading... </h1>;
  if (error)
    return <pre> {JSON.stringify(error, null, 2)} </pre>;
  
  if (!data) return <div> No user available </div>;

    return( 
    <div> 
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img alt={data.login} src={data.avatar_url} height="100"></img>  
    </div>
    );
}

export default App;
