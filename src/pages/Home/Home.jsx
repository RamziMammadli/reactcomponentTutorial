import axios from "axios";
import React, { useEffect, useState } from "react";
import UserBox from "../../components/UserBox";
import CardButton from "../../components/Buttons/CardButton";

const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('')
  const [names, setNames] = useState('Sitare', 'Terlale', 'Ramzi')

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);
  
  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
    setData((data) => data.filter(item => item.id !== id))
  }

  const handlePost = () => {
    axios.post(`https://northwind.vercel.app/api/products/`, {
      name: name
    })
    setName('')
    setData([...data, {name}])
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#eee",
          height: "10%",
        }}
      >
        React Development Service
      </div>
      <div>
        <input placeholder="Ad"  value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={() => handlePost()}>Add name</button>
      </div>
      <div style={{display:'flex', gap:20, flexWrap:'wrap',marginTop:20}}>
        {data &&
          data.map((item) => 
            <div style={{padding:20, backgroundColor:'#f8f8f8', borderRadius:20, flexDirection:'column', alignItems:'center',justifyContent:'center', display:'flex'}}>
            <UserBox item={item}/>
            <CardButton text='Buy'/>
            <CardButton text='Delete' klikle={() => handleDelete(item.id)}/>
          </div>)}
      </div>
    </div>
  );
};

export default Home;
