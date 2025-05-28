import SingleGoal from '../components/SingleGoal';

const GoalsList = ({ goals, onDelete }) => {

    return (
        <ul>
            {goals.map((goal) => (
                <li key={goal.id}>
                    <SingleGoal
                        id={goal.id}
                        title={goal.title}
                        onDelete={onDelete}>
                        <p>
                            {goal.description}
                        </p>
                    </SingleGoal>
                </li>
            ))}
        </ul>
    )
}

export default GoalsList;