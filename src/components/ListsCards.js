import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '645',
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '1em',
      },
      media: {
        height: 150,
        maxWidth: 600,
      },
      container: {
        background: 'rgba(0, 0, 0, 0.5)',
        width : 300,
        marginTop: '1.5em',
        marginLeft: '4em',
        marginBottom: '1.5em',
        fontFamily: 'Nunito',
      },
      customTypo: {
          color: 'fff',
      },
      span: {
          color: '#ffa500',
          fontSize: '1em',
          fontWeight: 'bold',
          fontFamily: 'Nunito',

      },
      colorText: {
        color: '#fff',
        fontSize: '1em',
        fontFamily: 'Nunito',
        fontWeight: 'bold',
      },
      buttonColor: {
          color: '#BC583A',
          fontWeight: 'bold',
          fontFamily: 'Nunito',
      },
      linkBack: {
        textDecoration: 'none',
      }
      
  }));


  export default function ListsCards (checked) {
    const classes = useStyles();
    const [recettes, setRecettes] = useState(null);
  
  useEffect(() => {
    fetch(`http://localhost:9000/api/recipes`)
    .then(res => res.json())
    .then(recipes => {
      setRecettes(recipes);
    });
    getRecettes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRecettes ()
  {
    fetch(`http://localhost:9000/api/recipes`)
    .then(res => res.json())
    .then(recipes => {
      setRecettes(recipes);
    });
  }

  function selectRecettes (id) 
  {
    
    fetch(`http://localhost:9000/api/recipe/${id}`, {
      method: 'GET'
    }).then((result)=> {
      result.json().then((resp)=> {
        console.warn(resp)
        getRecettes();
      })
    })
  }

  function deleteRecettes(id)
  {
    fetch(`http://localhost:9000/api/recipe/${id}`, {
      method: 'DELETE'
    }).then((result)=> {
      result.json().then((resp)=> {
        console.warn(resp)
        getRecettes();
      })
    })
  }
    
    return (
        <div className={classes.root} id="enjoy-your-meals">
            {recettes && recettes.map(recette =>
            <Collapse in={checked} {... (checked ? { timeout: 1000} : {})}
            >
            <Card className={classes.container}>
                <CardMedia
                className={classes.media}
                image={recette.photo}
                title="Contemplative Reptile"
                />
                <CardContent className={classes.customTypo}>
                <Typography 
                classeName={classes.colorText}
                gutterBottom 
                variant="h5" 
                color="primary"
                component="h1">
              <Link className={classes.linkBack} to={`recette/${recette.id}`}><span className={classes.colorText}>{recette.titre} </span>  <span className={classes.span}>- {recette.niveau}</span></Link>
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">
                <span className={classes.colorText}>{recette.description}</span>
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">
                <span className={classes.colorText}>{recette.personnes}</span> <span className={classes.span}>personnes</span>
                </Typography>
                <Typography 
                variant="body2" 
                color="textSecondary" 
                component="p">
                <span className={classes.colorText}>{recette.tempsPreparation}</span> <span className={classes.span}>minutes</span>
                </Typography>
                </CardContent>
            <CardActions >
              <Link className={classes.linkBack} to={`/modifier`}>
                <Button size="small" color="primary" className={classes.buttonColor} onClick={()=> selectRecettes(recette.id)}>
                Modifier
                </Button>
                </Link>
                <Button size="small" color="primary" className={classes.buttonColor} onClick={e =>
                         window.confirm("Are you sure you wish to delete this item?") && deleteRecettes(recette.id)
                       }>
                Supprimer
                </Button>
            </CardActions>
            </Card>
            </Collapse>
            )}
            
        </div>
        
    )
};


          
