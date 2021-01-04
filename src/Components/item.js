import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
// LocationOn

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
   
   avatar: {
      color: '#e3e3e3',
      // border: '1px solid #e3e3e3',
   } 


}));

function Item({props}) {

   const classes = useStyles();
   return (
               <ListItem alignItems="flex-start" className={classes.listItem}>
               <ListItemAvatar>
                  <Avatar alt="Verdi" style={{backgroundColor: props.color}}  className={classes.avatar}/>
               </ListItemAvatar>
               <ListItemText
                  primary={                        
                     <Grid container direction="row" justify="flex-start" alignItems="center">
                        <Grid item xs={6} sm={3}>
                           {props.name}
                        </Grid>
                        <Grid item xs={6} sm={3}>
                           <Grid container direction="row" justify="flex-end" alignItems="center">
                              <Checkbox />
                              <Checkbox />
                           </Grid>
                        </Grid>
                     </Grid>


                  }
               />
            </ListItem>
   )
}

export default Item;            