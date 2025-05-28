import { useRef } from "react";

const NewGoal = ({ onAddGoal }) => {

    const goal = useRef();
    const desc = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        const enteredGoal = goal.current.value;
        const enteredDesc = desc.current.value;

        e.currentTarget.reset();

        onAddGoal(enteredGoal, enteredDesc);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="goal">Twój cel</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="desc">Opis celu</label>
                <input id="desc" type="text" ref={desc} />
            </p>
            <p>
                <button>Dodaj cel</button>
            </p>
        </form>
    )
}

export default NewGoal;