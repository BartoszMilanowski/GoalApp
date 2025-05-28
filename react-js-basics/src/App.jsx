import Header from "./components/Header.jsx";
import goalsImg from './assets/goals.jpg';
import { useState } from "react";
import GoalsList from "./components/GoalsList.jsx";
import NewGoal from "./components/NewGoal.jsx";

export default function App() {

  const [goals, setGoals] = useState([]);

  function handleAddGoal(goal, desc) {
    setGoals(prevGoals => {
      const newGoal = {
        title: goal,
        description: desc,
        id: Math.random()
      }

      return [...prevGoals, newGoal]
    });
  }

  function handleDeleteGoal(id) {
    setGoals(prevGoals => prevGoals.filter((goal) => goal.id != id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "App logo" }}>
        <h1>Twoje cele</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <GoalsList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}

