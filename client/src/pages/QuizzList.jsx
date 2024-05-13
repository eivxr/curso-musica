import React from 'react'
import NavBar from '../components/misc/NavBar/NavBar'
import QuizzGrid from '../components/quizz/QuizzGrid'
import { Box } from '@mui/material';

export const QuizzList = () => {
  return (
    <>
    <NavBar/>
    <Box>
      <QuizzGrid/>
    </Box>
    </>
  )
}
