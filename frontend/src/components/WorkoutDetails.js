const WorkoutDetails = ({ workout }) => {
    return (
        <div className="workout-details">
            <h3>{workout.title}</h3>
            <p><strong>No. of reps:</strong> {workout.reps}</p>
            <p><strong>Load in kgs:</strong> {workout.load}</p>
            <p><small>{workout.createdAt}</small></p>
        </div>
    );
}

export default WorkoutDetails;