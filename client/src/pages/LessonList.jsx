import React from 'react'
import NavBar from '../components/misc/NavBar/NavBar'
import { Box } from '@mui/material'
import LessonGrid from '../components/lesson/LessonGrid'

export const LessonList = () => {
  return (
    <>
    <NavBar/>
    <Box>
      <LessonGrid/>
    </Box>
    </>
  )
}
