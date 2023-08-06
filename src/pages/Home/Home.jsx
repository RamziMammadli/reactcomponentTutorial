import axios from "axios";
import React, { useEffect, useState } from "react";
import UserBox from "../../components/UserBox";
import CardButton from "../../components/Buttons/CardButton";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setData(res.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/products/${id}`)
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
