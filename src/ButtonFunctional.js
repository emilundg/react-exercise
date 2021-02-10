import React, {useState} from 'react'

const ButtonFunctional = ({title}) => {
    const [clickValue, setClickvalue] = useState(0)
    const clickHandler = () => setClickvalue(clickValue + 1)

    return (
        <div>
            <h1>{clickValue}</h1>
            <button onClick={() => clickHandler()}>{title}</button>
        </div>
    )
}

export default ButtonFunctional