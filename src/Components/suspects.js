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

   listItem: {
      padding: 0,
   },

   green: {
      backgroundColor: 'green',
   },

   tachado: {
      textDecoration: 'line-through'
   }

}));

function Suspects() {
   
   const classes = useStyles();

   const suspectsList = [
      { name: 'Verdi', color: '#79bb29' },
      { name:'Mostaza', color: '#bbb229' },
      { name:'Azulino', color: '#2932bb' },
      { name:'Moradillo', color: '#8d29bb' },
      { name:'Escarlata', color: '#bb2929' },
      { name:'Blanco', color: '#F2F3ED'},
   ]
   
   return (
      <Grid item xs={12}>
         <Paper variant="outlined" square className={classes.paper}>
            <h2 className={classes.subtitle}>Sospechosos</h2>
            <List className={classes.root}>
               { suspectsList.map((value, index) => {                 
                  return (
                     <React.Fragment>
                        <Item key={index} props={value} />
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

export default Suspects;
