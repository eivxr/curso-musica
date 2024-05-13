import React from 'react'
import NavBar from '../components/misc/NavBar/NavBar'
import {useParams} from 'react-router-dom';

export const Quizz = () => {
  const {id_leccion} = useParams();
  return (
    <>
    <NavBar/>
    <>quizz numero:{`${id_leccion}`}</>
    </>
  )
}
