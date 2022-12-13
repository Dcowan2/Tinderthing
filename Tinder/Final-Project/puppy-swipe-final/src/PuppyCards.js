import React, { useEffect } from 'react';
import "./PuppyCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from '@material-ui/core';
import axios from './axios'
import { ServerDescriptionChangedEvent } from 'mongodb';


function PuppyCards() {
    const [dog, setDog] = React.useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/cards")

            setDog(req.data)
        }

            fetchData()
    }, [])

    const swiped =(direction, nameToDelete) => {
        console.log("Removing: "+ nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name)=>{
        console.log(name + "Left the screen");
    }; 

    return (
        <div className = "puppyCards">
            <div className = "PuppyCard_CardContainers">
            {people.map((person) => (
               <TinderCard
               className = "swipe"
               key={person.name}
               preventSwipe = {["up","down"]}
               onSwipe ={(dir)=> swiped(dir,person.name)}
               onCardLeftScreen={()=> outOfFrame(person.name)}
               >
                <div 
                style={{backgroundImage: "url("+ person.url+")"}}
                className="card"
                >
                    <h3>{person.name}</h3>
                </div>
               </TinderCard>
            ))}

            </div>
            
            
        </div>
    )
}

export default PuppyCards
