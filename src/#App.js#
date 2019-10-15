import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import imgURL from './images/rest1.jpg';
import './App.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';

import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAFzpavaaS5qMRo8FSZsqsZAaglgXL8H04",
  authDomain: "teamie-blue.firebaseapp.com",
  databaseURL: "https://teamie-blue.firebaseio.com",
  projectId: "teamie-blue",
  storageBucket: "teamie-blue.appspot.com",
  messagingSenderId: "373175945503",
  appId: "1:373175945503:web:0ce516f07c5d387642882a"
};

firebase.initializeApp(firebaseConfig);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
    gridList: {
    width: "100%",
    height: 600,
  },
  card:{
    margin: 20,
  }
}));

const AppBar_header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Teamie
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}


const TeamMemberFilter = () => {
  const classes = makeStyles(theme => ({
    TextField: {
      width: '20px',
    }
  }));

  return(
    <Paper>
      <Typography variant="h5" component="h3">Party Size:</Typography>
      <form class="filter">
        <TextField id="party-size" className={classes.textField} margin="normal"></TextField>
      </form>
    </Paper>
  )
}

const BudgetFilter = () => {
  return(
    <Paper>
      <Typography variant="h5" component="h3">Party Budget:</Typography>
      <form class="filter">
        <TextField id="party-budget" margin="normal"></TextField>
      </form>
        
      <Button variant="contained">
        Average
      </Button>
    </Paper>
  )
}

const TimeFilter = () => {
  return(
    <Paper>
      <Typography variant="h5" component="h3">We'd like to go during:</Typography>

      <Button variant="contained">
        Lunch 11:30AM-1:30PM
      </Button>

      <Button variant="contained">
        Dinner 5:30PM-7:30PM
      </Button>
    </Paper>
  )
}

const Pool = () => {
  const classes = useStyles()

  return(
    <div>
      <Typography variant="h5" component="h3">Pool</Typography>
<Card className={classes.card}>
  <Typography>Selected Restaurant 1</Typography>
  
 
</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 1</Typography>
 
</Card>
 </div>
    
  )
}
  
const GridComponent = ({restaurants}) => {
  return (
    <div>
      <Grid container spacing={10}>
      <Grid item xs={1}></Grid>
      <Grid item xs={4}>
          <TeamMemberFilter></TeamMemberFilter>
          <BudgetFilter></BudgetFilter>
          <TimeFilter></TimeFilter>
          <Pool></Pool>
          <Button variant="contained" color="primary">Send out pool</Button>
      </Grid>
      <Grid item xs={6}>
        <RestaurantList restaurants={restaurants}/>
      </Grid>
      <Grid item xs={1}></Grid>
      </Grid>
      
    </div>
    
  )
}

const RestaurantList = ({restaurants}) => {
  const classes = useStyles()
  
  return(
    
    <GridList className={classes.gridList}>
        <GridListTile cols={2} style={{ height: 'auto' }}>
        { restaurants.map(restaurant => <Restaurant key={restaurant.id} restaurant={ restaurant } />) }

        </GridListTile>
        
           
      </GridList>

  )
}

const Restaurant = ({key, restaurant}) => {
  // const {name, price, tables, type} = this.props
  return(
    <div className="restaurant-card">
     <Grid container spacing={3}>
      <Grid item xs={8}>
   <h2>{restaurant.name}</h2>
   
   <h5>{restaurant.price} Lunch, Dinner Available Table Sizes: {restaurant.tables.map(size => <span>{size}, </span>)}</h5>
   <type>{restaurant.type}</type>
   <vegan>Vegan</vegan>
   <gltfree>Gluton Free</gltfree>
  </Grid>
  
  <Grid item xs={3}>
<img src={imgURL}/>
<Button variant="outlined" color="primary">Add to list</Button>
</Grid>

</Grid>

</div>
)}




const App = () => {
  const [restaurantsAll, setRestaurantsAll] = useState({restaurants: []});
  const url = '/data/restaurants.json';
  
  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setRestaurantsAll(json);
    }
    fetchRestaurants();
  }, [])
  
  const classes = useStyles();

  return (
    <div>
      <AppBar_header/>
      <GridComponent restaurants={restaurantsAll.restaurants} />
      
    </div>
  );
}

export default App;