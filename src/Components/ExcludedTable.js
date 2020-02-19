import React, { useEffect } from "react"
import { Table } from 'reactstrap'
import TableRowExcluded from "./TableRowExcluded"

export default class ExcludedTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prices: {
                included: [
                    { id: 1, name: "", domesticPrice: 0, internationalPrice: 0 },
                ],
                excluded: [
                    { id: 1, name: "" },
                ]
            },
            total: {
                domesticPrice: 0,
                internationalPrice: 0
            }
        }

        this.addRows = this.addRows.bind(this)
        this.addNameVal = this.addNameVal.bind(this)
    }

    addNameVal(val, key) {
        this.setState(prev => (
            {
                ...prev, prices: {
                    ...prev.prices, excluded: prev.prices.excluded.map((d) => (
                        d.id == key ? { ...d, name: val } : d
                    ))
                }
            }
        ), () => console.log(this.state))
    }

    addRows() {
        return this.state.prices.excluded.map((row, index) => <TableRowExcluded key={index} index={index} handleChange={this.addNameVal} handleChange1={this.addPriceD} handleChange2={this.addPriceI} />)
    }

    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.addRows()}
                    </tbody>
                </Table>
            </div>
        )
    }
}