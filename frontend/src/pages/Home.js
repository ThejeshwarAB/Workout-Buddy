import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        //since useEffect cannot be made async
        //creating an async function inside it
        // console.log("tis is hit")
        const getWorkouts = async () => {
            const response = await fetch('/api/workouts')
            const data = await response.json()

            if (response.ok) {
                setWorkouts(data)
                console.log(data)
            }
        }
        getWorkouts()
    }, [])

    return (
        <div className="home">
            {/* Home is heres */}
            <div className="workouts">
                {workouts && workouts.map(workout => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <div>
                <WorkoutForm />
            </div>
        </div>
    );
}

export default Home;