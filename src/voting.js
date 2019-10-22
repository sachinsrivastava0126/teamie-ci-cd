import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Component from 'react';
import Poll from 'react-polls';


// Declaring poll question and answers
const pollQuestion = 'Select Restaurant';
const pollAnswers = [
  { option: 'Joy Yee\'s', votes: 8 },
  { option: 'Olive Mediterranean Grill', votes: 2 }
]


const VotingApp = ({match}) => {
    const eventID = match.params.id;

    const [pollResponses, setPollResponses] = useState({pollResponses: pollAnswers});


    const handleVote = () => {
        /* 
        
        This is where we update firebase data?

        */
        
        console.log("voted!");


    }

    console.log(eventID);
    return(

        // <h1>Voting for Event</h1>
        <Poll question={pollQuestion} 
        answers={pollAnswers} 
        onVote={handleVote}
        />

    )
}

export default VotingApp;