import axios from "axios";
import React, { useEffect, useState } from "react";
import UserBox from "../../components/UserBox";
import CardButton from "../../components/Buttons/CardButton";
import { useDispatch, useSelector } from "react-redux";
import { addPost, addWishlist, getCategoriesThunk } from "../../store/reducer/getSlice";
import { _createPost } from "../../store/reducer/postSlice";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'


const Home = () => {
  const [name, setName] = useState("");

  const data = useSelector((state) => state.getSlice.products);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCategoriesThunk());
  }, []);

  const handleDelete = (id) => {
    axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
  };

  const handlePost = () => {
    dispatch(_createPost({name}))
    dispatch(addPost({name}))
  };

  const handleWishlist = (id) => {   //add and remove wishlist product
    dispatch(addWishlist(id))
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
        <input
          placeholder="Ad"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => handlePost()}>Add name</button>
      </div>
      <div
        style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 20 }}
      >
        {data &&
          data.map((item) => (
            <div
              style={{
                padding: 20,
                backgroundColor: "#f8f8f8",
                borderRadius: 20,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <UserBox item={item} key={item.id} />
              <CardButton text="Buy" />
              <CardButton text="Delete" klikle={() => handleDelete(item.id)} />
              <button onClick={() => handleWishlist(item.id)}>{item.wishlist ? <FcLike/> : <FcLikePlaceholder/>}</button>

            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;