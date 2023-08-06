import React from 'react'

const UserBox = ({item}) => {
  return (
    <div>
        <p>{item.name}</p>
        <p>{item.supplier?.companyName}</p>
        <p>{item.supplier?.contactName}</p>
    </div>
  )
}

export default UserBox