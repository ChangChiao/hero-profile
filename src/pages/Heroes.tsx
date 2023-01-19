import React, { useEffect } from 'react'
import service from '../utils/api'
export const Heroes = () => {
  const queryListData = async () => {
    const result = await service.get('https://hahow-recruit.herokuapp.com/heroes')
    console.log('result', result);
    
  } 
  useEffect(() => {
    queryListData()
  }, [])

  return (
    <div>heroes 123</div>
  )
}
