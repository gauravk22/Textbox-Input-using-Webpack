import React, { useState, useEffect } from 'react'

export default function TableRow(props) {

    let [val, changeVal] = useState('')
    let [priceD, changePriceD] = useState('')
    let [priceI, changePriceI] = useState('')
    let [key, changeKey] = useState(props.index + 1)

    useEffect(() => {
        props.handleChange(val, key)
    }, [val])

    useEffect(() => {
        if (priceD != '')
            props.handleChange1(parseInt(priceD), key)
        else
            props.handleChange1(0, key)
    }, [priceD])

    useEffect(() => {
        if (priceI != '')
            props.handleChange2(parseInt(priceI), key)
        else
            props.handleChange2(0, key)
    }, [priceI])

    return (
        <tr>
            <td>
                <input type="text" placeholder="Name" id="name" value={val} onChange={(e) => changeVal(e.target.value)}></input>
            </td>
            <td>
                <label>Rs.</label>
                <input type="number" id="amount" value={priceD} onChange={(e) => changePriceD(e.target.value)}></input>
            </td>
            <td>
                <label>$</label>
                <input type="number" id="amount" value={priceI} onChange={(e) => changePriceI(e.target.value)}></input>
            </td>
        </tr>
    )
}