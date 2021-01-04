import React, { Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Suspects from './Components/suspects';
import Weapons from './Components/weapons';
import Rooms from './Components/rooms';

const useStyles = makeStyles((theme) => ({

   root: {
     flexGrow: 1,
   },
   
   title: {
      textAlign: 'center',
      fontSize: 22,
      fontWeight: 300,
   },

 }));

function App() {
   const classes = useStyles();
   return (
      <React.Fragment>
         <CssBaseline />
         <Container fixed>
            <h1 className={classes.title}>Hoja de pistas</h1>
            <Grid container className={classes.root} spacing={2}>
               <Suspects />
               <Weapons />
               <Rooms />
            </Grid>        
         </Container>
      </React.Fragment>
  );
}

export default App;
