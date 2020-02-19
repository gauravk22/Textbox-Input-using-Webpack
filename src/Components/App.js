import React, { useEffect } from "react"
import { ButtonToggle } from "reactstrap";

import IncludedTable from './IncludedTable'
import ExcludedTable from './ExcludedTable'
function App() {

	return (
		<div>
			<h4>Included</h4>
			<IncludedTable />
			<br />

			<h4>Excluded</h4>
			<ExcludedTable />

			<br />
			<ButtonToggle color="primary">Submit</ButtonToggle>{' '}

		</div>
	)
}

export default App

