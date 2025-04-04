import React, {useEffect, useState} from "react";

const Card = ({title}) => {
    const [count, setCount] = useState(0)
    const [hasLiked, setHasLiked] = useState(false)
    useEffect(() => {
        console.log(`${title} has been liked ${hasLiked}`)
    }, [hasLiked]);
    return (
        <div onClick={() => setCount(prevState => prevState + 1)}>
            <h2>{title}</h2>
            <h1>{count || null}</h1>
            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? '❤' : '🤍'}
            </button>
        </div>
    )
}

function App() {
    return (
        <div className="text-3xl font-bold underline">
            <Card title="Star War"/>
            <Card title="Avatar"/>
            <Card title="The Lion King"/>
        </div>
    );
}

export default App;
