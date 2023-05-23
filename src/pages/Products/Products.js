import React from 'react'
import Cards from '../../components/Card/Card'
import MediaCard from '../../components/Card/Card'
import "../../common/products.json"
export default function Products() {
  return (
    <div>
      <Cards/>
      <MediaCard/>
      <MediaCard/>
    </div>
  )
}
