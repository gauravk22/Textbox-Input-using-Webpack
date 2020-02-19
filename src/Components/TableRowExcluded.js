import React, { useState, useEffect } from 'react'

export default function TableRowExcluded(props) {

    let [val, changeVal] = useState('')
    let [key, changeKey] = useState(props.index + 1)

    useEffect(() => {
        props.handleChange(val, key)
    }, [val])

    return (
        <tr>
            <td>
                <input type="text" placeholder="Name" id="name" value={val} onChange={(e) => changeVal(e.target.value)}></input>
            </td>
        </tr>
    )
}