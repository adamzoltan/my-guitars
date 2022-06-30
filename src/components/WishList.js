import React from 'react'
import GuitarCard from './GuitarCard'

const WishList = ({guitars}) => {
  const filter = (data) => {
    return data.filter(guitar => !(parseInt(guitar.owned)))
  }
  return (
    <GuitarCard guitars={filter(guitars)}></GuitarCard>
  )
}

export default WishList
