import React, { useEffect, useState } from 'react'


const useFetchServer = () => {
    const portServer = 3000
const [products, setProducts] = useState()
useEffect(() => {
    fetch(`http://localhost:${portServer}/${path}`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProducts(data) 
    })
})

  return ( products  )
}

export default useFetchServer