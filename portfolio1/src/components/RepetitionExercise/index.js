import React, { useState } from 'react';

function AgeTable(props) {
   
    let theExname = props.exName;

    let choice;

    const puData = [
        {
            ageRange: "15 - 19 years old",
            gender: "female",
            exercise: "18 - 24 push ups"
        },
        {
            ageRange: "15 - 19 years old",
            gender: "male",
            exercise: "23 - 28 push ups"
        },
        {
            ageRange: "20 - 29 years old",
            gender: "female",
            exercise: "15 - 20 push ups"
        },
        {
            ageRange: "20 - 29 years old",
            gender: "male",
            exercise: "22 - 28 push ups"
        },
        {
            ageRange: "30 - 39 years old",
            gender: "female",
            exercise: "13 - 19 push ups"
        },
        {
            ageRange: "30 - 39 years old",
            gender: "male",
            exercise: "17 - 21 push ups"
        },
        {
            ageRange: "40 - 49 years old",
            gender: "female",
            exercise: "11 - 14 push ups"
        },
        {
            ageRange: "40 - 49 years old",
            gender: "male",
            exercise: "13 - 16 push ups"
        },
        {
            ageRange: "50 - 59 years old",
            gender: "female",
            exercise: "7 - 10 push ups"
        },
        {
            ageRange: "50 - 59 years old",
            gender: "male",
            exercise: "10 - 12 push ups"
        },
        {
            ageRange: "60+ years old",
            gender: "female",
            exercise: "5 - 11 push ups"
        },
        {
            ageRange: "60+ years old",
            gender: "male",
            exercise: "8 - 10 push ups"
        }
    ]

    const jjData = [
        {
            ageRange: "15 - 19 years old",
            gender: "female",
            exercise: "61 to 70 jumping jacks"
        },
        {
            ageRange: "15 - 19 years old",
            gender: "male",
            exercise: "71 - 80 jumping jacks"
        },
        {
            ageRange: "20 - 29 years old",
            gender: "female",
            exercise: "51 - 60 jumping jacks"
        },
        {
            ageRange: "20 - 29 years old",
            gender: "male",
            exercise: "61 - 70 jumping jacks"
        },
        {
            ageRange: "30 - 39 years old",
            gender: "female",
            exercise: "41 to 50 jumping jacks"
        },
        {
            ageRange: "30 - 39 years old",
            gender: "male",
            exercise: "51 - 60 jumping jacks"
        },
        {
            ageRange: "40 - 49 years old",
            gender: "female",
            exercise: "31 - 40 jumping jacks"
        },
        {
            ageRange: "40 - 49 years old",
            gender: "male",
            exercise: "41 - 50 jumping jacks"
        },
        {
            ageRange: "50 - 59 years old",
            gender: "female",
            exercise: "21 to 30 jumping jacks"
        },
        {
            ageRange: "50 - 59 years old",
            gender: "male",
            exercise: "31 to 40 jumping jacks"
        },
        {
            ageRange: "60+ years old",
            gender: "female",
            exercise: "10 to 20 jumping jacks"
        },
        {
            ageRange: "60+ years old",
            gender: "male",
            exercise: "20 - 30 jumping jacks"
        }
    ]

    const suData = [
        {
            ageRange: "18 - 25 years old",
            gender: "female",
            exercise: "32 sit ups"
        },
        {
            ageRange: "18 - 25 years old",
            gender: "male",
            exercise: "38 sit ups"
        },
        {
            ageRange: "26 - 35 years old",
            gender: "female",
            exercise: "28 sit ups"
        },
        {
            ageRange: "26 - 35 years old",
            gender: "male",
            exercise: "34 sit ups"
        },
        {
            ageRange: "36 - 45 years old",
            gender: "female",
            exercise: "22 sit ups"
        },
        {
            ageRange: "36 - 45 years old",
            gender: "male",
            exercise: "29 sit ups"
        },
        {
            ageRange: "46 - 55 years old",
            gender: "female",
            exercise: "17 sit ups"
        },
        {
            ageRange: "46 - 55 years old",
            gender: "male",
            exercise: "24 sit ups"
        },
        {
            ageRange: "56 - 65 years old",
            gender: "female",
            exercise: "12 sit ups"
        },
        {
            ageRange: "56 - 65 years old",
            gender: "male",
            exercise: "19 sit ups"
        },
        {
            ageRange: "65+ years old",
            gender: "female",
            exercise: "11 sit ups"
        },
        {
            ageRange: "65+ years old",
            gender: "male",
            exercise: "18 sit ups"
        }
    ]


    if (theExname === "Push Ups") {
        choice = puData;
    }
    else if (theExname === "Jumping Jacks") {
        choice = jjData;
    }
    else if (theExname === "Sit Ups"){
        choice = suData;
    }

    return (
        <div className='app-container'>
            <table>
                <thead>
                    <tr>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Reps</th>
                    </tr>
                </thead>

                {choice.map((val, key) => {
                    return (
                        <tbody>
                            <tr key={key}>
                                <td>{val.ageRange}</td>
                                <td>{val.gender}</td>
                                <td>{val.exercise}</td>
                            </tr>
                        </tbody>
                    )
                })}
                
            </table>
            
        </div>
    );
}

function DoneReps(props){
    let count = props.exCount;
    let name = props.exName;

    function isClicked(){

        if (count != 1){
            alert("You have completed " + count + " reps of " + name + " so far")
        }
        else {
            alert("You have completed " + count + " rep of " + name + " so far")
        }

        if (name == "Push Ups"){
            if (count > 28){
                alert("You outrank! You are in fit shape!")
            }
            else if (count > 17 && count < 29){
                alert("You have completed the average reps of a 15 to 19 year old")
            }
            else if (count > 14 && count < 29){
                alert("You have completed the average reps of a 20 to 29 year old")
            }
            else if (count > 12 && count < 22) {
                alert("You have completed the average reps of a 30 to 39 year old")
            }
            else if (count > 10 && count < 17) {
                alert("You have completed the average reps of a 40 to 49 year old")
            }
            else if (count > 6 && count < 13) {
                alert("You have completed the average reps of a 50 to 59 year old")
            }
            else if (count > 4 && count < 12) {
                alert("You have completed the average reps of a 60+ year old")
            }
            else if (count < 5){
                alert("You currently do not rank. Do a couple of more to find out your ranking!")
            }
        }
        else if (name === "Jumping Jacks"){
            if (name == "Jumping Jacks") {
                if (count > 80) {
                    alert("You outrank! You are in fit shape!")
                }
                else if (count > 60 && count < 81) {
                    alert("You have completed the average reps of a 15 to 19 year old")
                }
                else if (count > 50 && count < 71) {
                    alert("You have completed the average reps of a 20 to 29 year old")
                }
                else if (count > 40 && count < 61) {
                    alert("You have completed the average reps of a 30 to 39 year old")
                }
                else if (count > 30 && count < 51) {
                    alert("You have completed the average reps of a 40 to 49 year old")
                }
                else if (count > 20 && count < 41) {
                    alert("You have completed the average reps of a 50 to 59 year old")
                }
                else if (count > 9 && count < 31) {
                    alert("You have completed the average reps of a 60+ year old")
                }
                else if (count < 10) {
                    alert("You currently do not rank. Do a couple of more to find out your ranking!")
                }
            }
        }
        else if (name == "Sit Ups"){
            if (count > 32){
                alert("You outrank! You are in fit shape!");
            }
            else if (count > 11 && count < 25){
                alert("You have completed the average reps of a 56 to 65 year old")
            }
            else if (count > 10 && count < 19) {
                alert("You have completed the average reps of a 65+ year old")
            }
            else if (count < 11){
                alert("You currently do not rank. Do a couple of more to find out your rankings!")
            }
        }
    }

    return (
        <button onClick={isClicked}>
            Status
        </button>
    )
}

function RepetitionExercise(props) {
    // initializes set state
    const [count, setCount] = useState(0); // value, function
    let name = props.name;

    return (

        <>
            <p><b>{name}</b></p>
            <p>Reps: <b>{count}</b></p>
            <button onClick={() => setCount(count + 1)}>Complete Rep</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <DoneReps exCount={count} exName={name}></DoneReps>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h3>Average Repetitions for {name}</h3>
            <AgeTable exName={name}></AgeTable>
        </>
    );
}

export default RepetitionExercise;