import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import './App.css';
import RestaurantList from './components/RestaurantList';

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
    height: 700,
  },
  card:{
    margin: 20,
  }
}));

const AppBar_header = ({}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Teamie
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

const Poll = ({pollRests}) => {
  const classes = useStyles()
  //const [pollRests, setPollRests] = useState([]);
  
  return(
    <div>
      <Typography variant="h5" component="h3">Poll</Typography>
<Card className={classes.card}>
  
  <Typography>Selected Restaurant 1</Typography>

</Card>
<Card className={classes.card}>
  <Typography>Selected Restaurant 2</Typography>
 
</Card>
 </div>
    
  )
}

const App = ({}) => {
  const [restaurants, setRestaurants] = useState({restaurants: []});
  const url = '/data/restaurants.json';
  const filteredUrl = '/data/restaurantsFiltered.json';

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setRestaurants(json);
    }
    fetchRestaurants();
    // fetchFilteredRestaurants();
  }, []);
  
  const classes = useStyles();

  return (
    <React.Fragment>
        <AppBar_header/>
        <RestaurantList restaurants={restaurants.restaurants}/>
    </React.Fragment>
  );
}

export default App;