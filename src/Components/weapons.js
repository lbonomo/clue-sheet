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

function Weapons() {
   
   const classes = useStyles();

   const weaponsList = [
      { name: 'Llave Ingresa', color: '#888' },
      { name: 'Candelabro', color: '#888' },
      { name: 'Data', color: '#888' },
      { name: 'Pistola', color: '#888' },
      { name: 'Tubería', color: '#888' },
      { name: 'Soga', color: '#888' },
   ]
   
   return (
      <Grid item xs={12}>
         <Paper variant="outlined" square className={classes.paper}>
            <h2 className={classes.subtitle}>Armas</h2>
            <List className={classes.root}>
               { weaponsList.map((value, index) => {
                  return (
                     <React.Fragment>
                        <Item key={index} icon='weapons' props={value} />
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

export default Weapons;
