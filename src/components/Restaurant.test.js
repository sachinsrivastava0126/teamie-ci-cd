import React from 'react'
import render from 'react-testing-library'
import getByTestId from 'react-testing-library'
import Restaurant from './Restaurant'


const restKey = 3
const theTestRest = {
    "name": "Josh’s Hot Dogs",
    "type": "Hot Dogs",
    "price": 10,
    "hours": "1700-2100",
    "tables": [3, 1, 2, 0],
    "happy_hour": true,
    "good_for_clients": false,
    "family_friendly": true,
    "team_bonding": false
}


test('Restaurant should render given specified props', () => {
    const props =  {
        key: restKey, 
        restaurant: theTestRest, 
        selectedRestaurants: [], 
        setSelectedRestaurants: () => {} 
    }

    render(<Restaurant {...props} />)
})

test('Restaurant button should trigger color change', () => {
    const props = {
        key: restKey, 
        restaurant: theTestRest, 
        selectedRestaurants: [], 
        setSelectedRestaurants: () => {} 
    }

    const {getByTestId} = render(<Restaurant {...props} />)


    getByTestId('addRest').click()

    var colorPropCheck = getByTestId('addRest').hasAttribute('color');
    var colorIsPrimary = getByTestId('addRest').classList.contains('MuiChip-colorPrimary');
    var colorIsDefault = getByTestId('addRest').classList.contains('MuiChip-colorDefault');

    expect(colorPropCheck)
    expect(colorIsPrimary)
    expect(!colorIsDefault)
})
