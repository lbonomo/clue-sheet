import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Item from './item';

const useStyles = makeStyles((theme) => ({
   
   paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },

   subtitle: {
      margin: 0,
      textAlign:'left',
      fontWeight: 300,
      fontSize: 18,
   },

 }));

function Rooms() {
   
   const classes = useStyles();

   const roomsList = [
      { name: 'Baño', color: '#bdbdbd' },
      { name: 'Estudio', color: '#bdbdbd' },
      { name: 'Comedor', color: '#bdbdbd' },
      { name: 'Salón de Juegos', color: '#bdbdbd' },
      { name: 'Garaje', color: '#bdbdbd' },
      { name: 'Habitación', color: '#bdbdbd' },
      { name: 'Sala', color: '#bdbdbd' },
      { name: 'Cocina', color: '#bdbdbd' },
      { name: 'Patio', color: '#bdbdbd' },            
   ]
   
   return (
      <Grid item xs={12}>
         <Paper variant="outlined" square className={classes.paper}>
            <h2 className={classes.subtitle}>Lugar</h2>
            <List className={classes.root}>
               { roomsList.map((value, index) => {                 
                  return (
                     <React.Fragment>
                        <Item key={index} icon='rooms' props={value} />
                        <Divider variant="inset" component="li" />
                     </React.Fragment>
                  )
                  })
               }            
            </List>            
         </Paper>
      </Grid>
   )
}

export default Rooms;
