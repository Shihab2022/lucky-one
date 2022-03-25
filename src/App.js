import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData]=useState([])

  useEffect(() =>{

fetch('fakeData.json')
.then(response =>response.json())
.then(data=>setData(data))


  },[])
  console.log(data)
  return (
    <div className="App">
    
<h1>start project</h1>


    </div>
  );
}

export default App;
