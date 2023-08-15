import React from 'react'

const UserBox = ({item}) => {
  return (
    <div>
      {/* <img src={item.image} style={{ width: 50, height: 50 }} /> */}
        <p>{item.name}</p>
        <p>{item.supplier?.companyName}</p>
        <p>{item.supplier?.contactName}</p>
    </div>
  )
}

export default UserBox