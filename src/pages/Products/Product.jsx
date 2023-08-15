import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {

    const [ data, setData ] = useState([])
    const [ newProduct, setNewProduct] = useState([])
    const [ newCategory, setNewCategory] = useState([])

    useEffect(() => {
        
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => {
            setData(res.data)
        })

    },[newProduct])

  return (
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
              <UserBox item={item} />
              <CardButton text="Buy" />
              <CardButton text="Delete" klikle={() => handleDelete(item.id)} />
            </div>
          ))}
      </div>
  )
}

export default Product