import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Select,
  } from '@chakra-ui/react';



const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh',
    },
    stack: {
        background: 'rgba(0, 0, 0, 0.5)',
    },
    colorText: {
        color: '#fff',
    },
    colorSelect: {
        color: '#fff',
    },
    colorTitle: {
        color: '#ffa500',
    },
  }));


  export default function ModifyCards () {
    const classes = useStyles();
    const [, setRecettes] = useState(null);
    const [titre, setTitre] = useState("");
    const [description, setDescription] = useState("");
    const [niveau, setNiveau] = useState("");
    const [personnes, setPersonnes] = useState("");
    const [tempsPreparation, setTempsPreparation] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [etapes, setEtapes] = useState("");
    const [recetteId, setRecetteId] = useState(null);

    useEffect(() => {
        getRecettes();
    },[])

    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function getRecettes ()
  {
    fetch(`http://localhost:9000/api/recipes`)
    .then(res => res.json())
    .then(recipes => {
      setRecettes(recipes);
      setTitre(recipes[0].titre)
      setDescription(recipes[0].description)
      setNiveau(recipes[0].niveau)
      setPersonnes(recipes[0].personnes)
      setTempsPreparation(recipes[0].tempsPreparation)
      setIngredients(recipes[0].ingredients)
      setEtapes(recipes[0].etapes)
      setRecetteId(recipes[0].id)
    });
  }

  function updateRecettes (id)
  {
    let item = {titre, description, niveau, personnes, tempsPreparation, ingredients, etapes, recetteId}
    fetch(`http://localhost:9000/api/recipe/${id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(item)
    }).then((result)=> {
      result.json().then((resp)=> {
        console.warn(resp)
        getRecettes();
      })
    })
  }


  
    
    
    return (
        <div className={classes.root} id="enjoy-your-meals" >
          
            <Flex
        justify={'center'}
            >
        <Stack
          spacing={4}
          w={'full'}
          maxW={'md'}
        className={classes.stack}
          rounded={'xl'}
          boxShadow={'lg'}
          p={6}
          my={12}>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }} className={classes.colorTitle}>
            Modifie ta recette
          </Heading>
          <FormControl id="titre" isRequired>
            <FormLabel className={classes.colorTitle} >Titre</FormLabel>
            <Input
                className={classes.colorText}
              placeholder="Titre de ta recette"
              _placeholder={{ color: 'white' }}
              type="text"
              value={titre} onChange={(e)=>setTitre(e.target.value)}
            />
          </FormControl>
          <FormControl id="Description" isRequired >
            <FormLabel className={classes.colorTitle}>Description</FormLabel>
            <Input 
            type="text"
            placeholder="Description de ta recette" 
            className={classes.colorText}
            value={description} onChange={(e)=>setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl id="Niveau">
            <FormLabel className={classes.colorTitle}>Niveau</FormLabel>
            <Select 
            placeholder="Choisis ton niveau" 
            className={classes.colorSelect} 
            value={niveau} onChange={(e)=>setNiveau(e.target.value)}>
            <option>Padawan</option>
            <option>Jedi</option>
            <option>Maitre</option>
            </Select>
            </FormControl>
            <FormControl id="Personnes">
            <FormLabel className={classes.colorTitle}>Nombres de personnes</FormLabel>
            <Input 
            type="number"
             placeholder="Nombre de personnes" 
             className={classes.colorText} 
             value={personnes} onChange={(e)=>setPersonnes(e.target.value)}/>
            </FormControl>
            <FormControl id="Description" isRequired >
            <FormLabel className={classes.colorTitle}>Temps</FormLabel>
            <Input 
            type="text"
            placeholder="Temps" 
            className={classes.colorText}
            value={tempsPreparation} onChange={(e)=>setTempsPreparation(e.target.value)}
            />
          </FormControl>
            <FormLabel className={classes.colorTitle}>Ingredients</FormLabel>
            <Stack direction='row'>
                <Input 
                type="text"
                placeholder="" 
                className={classes.colorText}
                value={ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
            </Stack>
            <Stack direction='row'>
            <FormControl id="Etapes" isRequired>
            <FormLabel className={classes.colorTitle} >Etapes</FormLabel>
            <Input
                className={classes.colorText}
              placeholder=""
              _placeholder={{ color: 'white' }}
              type="text"
              value={etapes} onChange={(e)=>setEtapes(e.target.value)}
            />
            <Button
              bg={'rgba(0, 0, 0, 0.5)'}
              color={'white'}
              _hover={{
                bg: '#ffa500',
              }}>
              Submit
            </Button>
            </FormControl>
            </Stack>
          <Stack spacing={6}>
            <Button
              bg={'rgba(0, 0, 0, 0.5)'}
              color={'white'}
                _hover={{
                bg: '#ffa500',
              }}
              onClick={updateRecettes}
              >
              Modifier
            </Button>
          </Stack>
        </Stack>
      </Flex>
        </div>
    )
}