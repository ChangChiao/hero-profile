import React, { useEffect, useState } from 'react'
import service from '../utils/api'
import { Hero } from '../types/hero'
import HeroList from "../components/HeroList";
export const Heroes = () => {
  const [heroList, setHeroList] = useState<Hero[]>([]) 
  const queryListData = async () => {
    try {
      const result = await service.get<any, Hero[]>('https://hahow-recruit.herokuapp.com/heroes')
      console.log('result', result);
      setHeroList(result);
    } catch (error) {
      console.log('error', error)
    }
    
  } 
  useEffect(() => {
    queryListData()
  }, [])

  return (
    <div>
      <HeroList heroList={heroList} />
    </div>
  )
}
