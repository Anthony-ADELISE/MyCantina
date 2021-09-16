import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Image from '../src/assets/ingredient.jpg';
import Header from './components/Header';
import DetailsCards from './components/DetailsCards';
import AddRecipes from './components/AddRecipes.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ListsCards from './components/ListsCards';


const useStyles = makeStyles((theme) => ({
  root: {
    minheight: '100vh',
    backgroundImage: `url(${Image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
}));

export default function App() {
  
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <Header/>
      <Route exact path="/" component={ListsCards}></Route>
      <Route path="/ajoutsrecettes" component={AddRecipes}></Route>
      <Route exact path="/recette/:id" handleChange={(e) => console.log(e)} component={DetailsCards}></Route>
      </Router>
      
    </div>
  );
}

