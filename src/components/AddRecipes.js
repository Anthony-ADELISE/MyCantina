import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        minheight: '100vh',
    },
  }));


  export default function AddRecipes () {
    const classes = useStyles();
    return (
        <div className={classes.root} >  
        <h1>Ok</h1>
        </div>
    )
}