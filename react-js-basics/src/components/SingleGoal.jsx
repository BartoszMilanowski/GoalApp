const SingleGoal = ({id ,title, children, onDelete}) =>{
    return(
        
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={() => onDelete(id)}>USUŃ</button>
        </article>

    )
}

export default SingleGoal;

// export default function SingleGoal({title, children}){
    
//     return (
//         <article>
//             <div>
//                 <h2>{title}</h2>
//                 <p>{children}</p>
//             </div>
//             <button>USUŃ</button>
//         </article>
//     )
// }