function WorkoutItem(props) {


    console.log(props)

    return (<>
        <h1>{props.obj.exercise}</h1>
        <h2> Reps: {props.obj.reps}</h2>
        <h3> Weight: {props.obj.weight}</h3>

        <form action="">

            <input type="checkbox" />
            <label for="html">Monday</label><br></br>

            <input type="checkbox" />
            <label for="html">Tusday</label><br></br>

            <input type="checkbox" />
            <label for="html">Wednesday</label><br></br>

            <input type="checkbox" />
            <label for="html">Thursday</label><br></br>

            <input type="checkbox" />
            <label for="html">Friday</label><br></br>

            <input type="checkbox" />
            <label for="html">Saturday</label><br></br>

            <input type="checkbox" />
            <label for="html">Sunday</label><br></br>
        </form>
        <button> Add to Workout</button>
    </>)
}

export default WorkoutItem