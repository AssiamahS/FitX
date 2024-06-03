import { ADD_WORKOUT } from "../graphql/mutations"
import { useMutation } from '@apollo/client';
import { GET_WORKOUTS, GET_USER_WORKOUT } from "../graphql/queries";
import { useNavigate } from "react-router-dom";


function WorkoutItem(props) {
    const navigate = useNavigate()
    const [addworkout] = useMutation(ADD_WORKOUT)
    const submitform = async (event) => {
        event.preventDefault()
        console.log(props.obj)

        const monday = document.getElementById('M').checked ? "M " : ""
        const tusday = document.getElementById('Tu').checked ? "Tu " : ""
        const Wednesday = document.getElementById('W').checked ? "W " : ""
        const thusday = document.getElementById('Th').checked ? "Th " : ""
        const friday = document.getElementById('F').checked ? "F " : ""
        const saturday = document.getElementById('Sa').checked ? "Sa " : ""
        const sunday = document.getElementById('Su').checked ? "Su  " : ""

        const schedule = monday + tusday + Wednesday + thusday + friday + saturday + sunday
        console.log(schedule)
        await addworkout({
            variables: {
                exercise: props.obj.exercise,
                weight: props.obj.weight,
                reps: props.obj.reps,
                dayOfWeek: schedule

            },
            refetchQueries: [GET_USER_WORKOUT]
        })
        // navigate("/workouts")
        window.location = "/workouts"
    }
    // console.log(props)

    return (<>
        <h1>{props.obj.exercise}</h1>
        <h2> Reps: {props.obj.reps}</h2>
        <h3> Weight: {props.obj.weight}</h3>

        <form onSubmit={submitform}>

            <input type="checkbox" name="monday" id='M' />
            <label >Monday</label><br></br>

            <input type="checkbox" name="Tusday" id='Tu' />
            <label >Tusday</label><br></br>

            <input type="checkbox" name="Wednesday" id='W' />
            <label >Wednesday</label><br></br>

            <input type="checkbox" name="Thursday" id='Th' />
            <label >Thursday</label><br></br>

            <input type="checkbox" name="Friday" id='F' />
            <label >Friday</label><br></br>

            <input type="checkbox" name="Saturday" id='Sa' />
            <label>Saturday</label><br></br>

            <input type="checkbox" name="Sunday" id='Su' />
            <label >Sunday</label><br></br>
            <button> Add to Workout</button>
        </form>
    </>)
}

export default WorkoutItem