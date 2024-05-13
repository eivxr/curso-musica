import React from 'react'
import NavBar from '../components/misc/NavBar/NavBar'
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText, Button, Grid, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../components/home/Header';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Contact from '../components/home/Contact';


export const Home = () => {
  return (
    <>
    <NavBar/>
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Features />
        </Grid>
        <Grid item xs={12}>
          <Testimonials />
        </Grid>
        <Grid item xs={12}>
          <Contact />
        </Grid>
      </Grid>
    </Container>
    </>
  )
}
