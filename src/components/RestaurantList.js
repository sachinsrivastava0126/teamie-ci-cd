import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import Restaurant from './Restaurant';


const useStyles = makeStyles({
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
  });

const TeamMemberFilter = ({state}) => {
    const classes = makeStyles(theme => ({
      TextField: {
        width: '20px',
      }
    }));
  
    return(
      <Paper>
        <Typography variant="h5" component="h3">Party Size:</Typography>
        <form class="filter">
          <TextField onChange={(e) => state.setNumPeople(e.target.value)} id="party-size" className={classes.textField} margin="normal"></TextField>
        </form>
      </Paper>
    )
}

const BudgetFilter = ({setBudget}) => {
    return(
      <Paper>
        <Typography variant="h5" component="h3">Party Budget:</Typography>
        <form class="filter">
          <TextField onChange={(e) => setBudget(e.target.value)} id="party-budget" margin="normal"></TextField>
        </form>
          
      </Paper>
    )
  }

const TimeFilter = ({state}) => {
    const handleOnClick = (time) => {
        console.log("filtering")
        // setSelectedTime(time);
        state.setFilterOnOff(!state.filterOnOff);
        // setFilteredRestaurants(filteredData);
    }

    return(
        <Paper>
        <Typography variant="h5" component="h3">We'd like to go during:</Typography>

        <Button onClick={(e) => handleOnClick("11:30-1:30")} variant="contained">
            Lunch 11:30AM-1:30PM
        </Button>

        <Button onClick={(e) => handleOnClick("5:30-7:30")} variant="contained">
            Dinner 5:30PM-7:30PM
        </Button>
        </Paper>
    )
}
  
const RestaurantList = ({restaurants}) => {
    console.log("restaurants: " + restaurants.restaurants)
    const filteredRestaurants = restaurants.filter(r => true); // this will re-render because of the changes in filter attributes which are states (time, etc)
    const [numPeople, setNumPeople] = useState("");
    const [budget, setBudget] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [filterOnOff, setFilterOnOff] = useState(false);

    return(
        <React.Fragment>
            <Grid container spacing={10}>
                <Grid item xs={1}></Grid>

                <Grid item xs={4}>
                    <TeamMemberFilter state={{numPeople, setNumPeople}}></TeamMemberFilter> 
                    {/* technically don't need numPeople in the prev line */}
                    <BudgetFilter setBudget={setBudget}></BudgetFilter>
                    <TimeFilter state={{filterOnOff, setFilterOnOff}}></TimeFilter>
                    <br/>
                    {/* <Poll></Poll> */}
                    <Button variant="contained" color="primary">Send out Poll</Button>
                </Grid>

                <Grid item xs={6}>
                    {filteredRestaurants.map(r => <Restaurant key={r.id} 
                                        restaurant={r}
                                        // state={{selected, toggle}}
                                        />)}
                </Grid>

                <Grid item xs={1}></Grid>
            </Grid>
        </React.Fragment>
    )
}

export default RestaurantList;