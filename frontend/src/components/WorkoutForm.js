import { useState } from "react";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const WorkoutForm = () => {

    const { dispatch } = useWorkoutContext()
    const [title, setTitle] = useState('')
    const [reps, setReps] = useState('')
    const [load, setLoad] = useState('')
    const [error, setError] = useState(null)

    const addWorkout = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, reps, load })
        })
        const data = await response.json()

        if (!response.ok) {
            setError(data.error)
            console.log(data.error)
        }
        else if (response.ok) {
            setTitle('')
            setReps('')
            setLoad('')
            console.log('workout added')
            dispatch({ type: 'CREATE_WORKOUT', payload: data })
        }
    }

    return (
        <div className="workout-form">
            <h3>Workout form</h3>
            <form onSubmit={(e) => addWorkout(e)}>
                <label>Workout title:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />
                <label>Reps:</label>
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps} />
                <label>Load(in kgs):</label>
                <input
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load} />
                <button>Add workout</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default WorkoutForm;