const Person = (props) =>{
    return (
        <div>
            <h1>I'd like {props.choice} please</h1>
            <p>Here is your {props.choice}</p>
            <h2>hey may i have another?</h2>
            {props.remove}
            <p>sorry we're all out , we only have {props.fruits} left </p>
        </div>
    )
}

export {Person};