import React, { useEffect } from "react"
import { Table } from 'reactstrap';
import TableRow from './TableRow'

var i = 1;
export default class IncludedTable extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            prices: {
                included: [
                    { id: 1, name: "", domesticPrice: null, internationalPrice: null },
                ],
                excluded: [
                    { name: "p" },
                ]
            },
            total: {
                domesticPrice: 0,
                internationalPrice: 0
            }
        }

        this.newRow = this.newRow.bind(this)
        this.addRows = this.addRows.bind(this)
        this.addNameVal = this.addNameVal.bind(this)
        this.addPriceD = this.addPriceD.bind(this)
        this.addPriceI = this.addPriceI.bind(this)

    }

    newRow() {
        if (this.state.prices.included[0].name.length === 1 && this.state.prices.included[0].domesticPrice === 0 && this.state.prices.included[0].internationalPrice === 0) {
            i += 1;

            this.setState(prev => (
                { ...prev, prices: { ...prev.prices, included: [...prev.prices.included, { id: i, name: "", domesticPrice: null, internationalPrice: null }] } }
            )
            )
        }
        else if (this.state.prices.included[0].name.length === 0) {
            console.log('emoty')
        }
    }

    addNameVal(val, key) {
        this.newRow()
        this.setState(prev => (
            {
                ...prev, prices: {
                    ...prev.prices, included: prev.prices.included.map((d) => (
                        d.id == key ? { ...d, name: val } : d
                    ))
                }
            }
        ), () => console.log(this.state))
    }

    addPriceD(val, key) {
        this.setState(prev => (
            {
                prices: {
                    ...prev.prices, included: prev.prices.included.map((d) => (
                        d.id == key ? { ...d, domesticPrice: val } : d
                    ))
                },
                total: {
                    ...prev.total, domesticPrice: prev.prices.included.map(p => {
                        var i = 0;
                        i += p.domesticPrice
                        return i
                    }
                    )
                }
            }
        ), () => console.log(this.state))
    }

    addPriceI(val, key) {
        this.setState(prev => (
            {
                total: { ...prev.total, internationalPrice: val }, prices: {
                    ...prev.prices, included: prev.prices.included.map((d) => (
                        d.id == key ? { ...d, internationalPrice: val } : d
                    ))
                }
            }
        ), () => console.log(this.state))
    }

    addRows() {
        return this.state.prices.included.map((row, index) => <TableRow key={index} index={index} handleChange={this.addNameVal} handleChange1={this.addPriceD} handleChange2={this.addPriceI} />)
    }

    render() {
        return (
            <div>
                <Table hover>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>AMOUNT-DOMESTIC</th>
                            <th>AMOUNT-INTERNATIONAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.addRows()}
                        <tr>
                            <th>Total</th>
                            <th>Rs.
                                <input type="text" value={this.state.total.domesticPrice} id="priceT" readOnly></input>
                                (Estimate)
                            </th>
                            <th>$
                                <input type="text" value={this.state.total.internationalPrice} id="priceT" readOnly></input>
                                (Estimate)
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}