import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 645,
      background: 'rgba(0, 0, 0, 0.5)',
      margin: '0 auto',
      

    },
    media: {
      height: 300,
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
    }
  });



function DetailsRecipe () {
    
    const classes = useStyles();
    
    const params = useParams();
    const id = params.id;

    const [recette, setRecette] = useState(null)
    
    useEffect (() => {
        fetch(`http://localhost:9000/api/recipe/${id}`)
        .then((res) => res.json())
        .then((result) => {
            setRecette(result)
        })
   
   
    }, [])
    
    return (
        <div id="enjoy-your-meals" >
                <Card className={classes.root}  id="card-details">
                <CardActionArea>
                    <CardMedia
                    className={classes.media}
                    image={recette?.photo}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2"> 
                    <span className={classes.colorText}>{recette?.titre} </span>  <span className={classes.span}>- {recette?.niveau}</span>
                    </Typography>
                    <Typography variant="body2" color="dark" component="p" >
                    <span className={classes.colorText}>{recette?.description}</span>
                    </Typography>
                    <Typography  variant="body2" color="dark" component="p">
                    <span className={classes.colorText}>{recette?.personnes}</span> <span className={classes.span}>personnes</span>
                    </Typography>
                    <Typography variant="body2" color="dark" component="p">
                    <span className={classes.colorText}>{recette?.tempsPreparation}</span> <span className={classes.span}>minutes</span>
                    </Typography>
                    <Typography variant="body2" color="dark" component="p">
                    </Typography>
                    <Typography variant="body2" color="dark" component="p" className={classes.colorText}>
                        {recette?.etapes}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" className={classes.buttonColor}>
                    modifier
                    </Button>
                    <Button size="small" color="primary" className={classes.buttonColor}>
                    supprimer
                    </Button>
                </CardActions>
                </Card>
                </div>
    )
}

export default DetailsRecipe;
