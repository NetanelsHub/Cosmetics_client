import React from 'react'
import useFetch from '../services/useFetch'

export default function HairLine() {
  const {data} = useFetch()
  return (
    <div>HairLine</div>
  )
}
