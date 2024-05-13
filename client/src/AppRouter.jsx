import React from 'react'
import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import {Login} from './pages/Login';
import { Lesson } from './pages/Lesson';
import { Quizz } from './pages/Quizz';
import { LessonList } from './pages/LessonList';
import { QuizzList } from './pages/QuizzList';



export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/lesson/:id_leccion" element={<Lesson />} />
        <Route path='/quizz/:id_leccion' element={<Quizz/>}/>
        <Route path='/quizz' element={<QuizzList/>}/>
        <Route path='/lesson' element={<LessonList/>}/>
    </Routes>
  )
}
