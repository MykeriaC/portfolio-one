import React, { useState } from 'react';

// function to display the inital state of the timer
function InitialTime() {
    return <h3>Timer:</h3>
}

// function to display the restart time screen for the timer
function ResetTime() {
    return <h3>Timer: 00:00</h3>
}

// we might just want to call this class in our toTime function to display the counter once the user clicks the start button
class DurationExercise extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: props.seconds, interval: undefined }
    }

    componentDidMount() {
        let intervalId = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
        this.setState({ interval: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)

    }

    render() {
        let minutes = Math.floor(this.state.time / 60)
        let seconds = this.state.time - minutes * 60

        return (
            <div>
                <h3>Timer: {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</h3>
            </div>
        );
    }
}

// copied DurationExercise class so that I could display each of the lap times
class LapTimer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { time: props.seconds, interval: undefined }
    }

    componentDidMount() {
        let intervalId = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
        this.setState({ interval: intervalId })
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)

    }

    render() {
        let minutes = Math.floor(this.state.time / 60)
        let seconds = this.state.time - minutes * 60

        return (
                <custom style={{ color: "white" }}>{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</custom>
        );
    }
}

// displays each of the laps each time the user presses the button "Lap"
function DisplayArr(props) {
    let count = props.counts;
    let [lapTimers, setLapTimers] = useState([0])
    let arr = []

    // for (var i = 0; i < count; i++) {
    //     arr.push(<div key={i} ><b>Lap {i + 1}</b> - <LapTimer
    //         active={i === count - 1}
    //         setTime={(newTime) => setLapTimers(oldArr => {
    //             console.log(i === count - 1)
    //             oldArr[i] = newTime(oldArr[i])
    //             console.log(newTime)
    //             console.log(oldArr)
    //             return [...oldArr]
    //         })}
    //         seconds={lapTimers[i]}></LapTimer> </div>)
    // }

    for (var i = 0; i < count; i++) {
        <container>
            <scroll>
                {
                    arr.push(<div key={i} ><b>Lap {i + 1}</b> - <LapTimer seconds={0}></LapTimer> </div>)
                }
            </scroll>
        </container>
    }

    return <>{arr}</>
}

function StartTime(props) {
    // two use states
    const [timer, setTimer] = useState(-1)
    const [reset, setReset] = useState(false)

    const [count, setCount] = useState(1)

    // state that changes from false to true when the start button is pushed; this helps so that it starts counting the first lap time after we push start
    const [display, setDisplay] = useState(false)

    return <>
        {/* displays the name of the exercise which was passed into props from the call of StartTime component in Exercise Button */}
        <h2 style={{ color: "#F48221" }}><b>{props.name}</b></h2>
        {
            // if timer is -1 (initially -1), it displays this screen first where it shows "Timer:" (from initialTime functional component) and the start button that changes states to false upon click
            (timer === -1 ?
                <>
                    {/* if reset is true, i want reset to display, else display initial time*/}
                    {
                        (reset === true ?
                            <ResetTime></ResetTime>
                            :
                            <InitialTime></InitialTime>
                        )
                    }
                    <button style={{ color: "white" }} disabled={true}>Lap</button>
                    &nbsp;
                    {/* if the start button is clicked, it changes the reset state to false and timer to 0 which activates the other terenary condition since timer is no longer -1 */}
                    <button onClick={() => { setTimer(0); setReset(false); setDisplay(true) }}>Start</button>
                    &nbsp;
                </>

                :
                <>
                    {/* else if timer is NOT -1, we run this */}
                    {/* we call the durationexercise component and pass the value 0 to seconds to pass in the duration component */}
                    <DurationExercise seconds={0}></DurationExercise>

                    <button onClick={() => setCount(count + 1)}>Lap</button>
                    &nbsp;

                    {/* button for reset that when clicked sets the timer back to -1, which takes us back up to the other terenary expression; also sets reset to true  */}
                    <button onClick={() => { setTimer(-1); setReset(true); setCount(1); setDisplay(false) }}>Reset</button>


                    {/* &nbsp; */}
                    <br></br>
                    <br></br>
                    {/* <StopTimer counts={count}></StopTimer> */}

                    <DisplayArr counts={count}></DisplayArr>
                </>

            )
        }

    </>
}

export default StartTime;