import React from "react";
import NavBar from "../components/misc/NavBar/NavBar";
import {useParams} from 'react-router-dom'

export const Lesson = ({}) => {
  const {id_leccion} = useParams();

  return (
    <>
      <NavBar />
      <>leccion numero: {`${id_leccion}`}</>
    </>
  );
};
