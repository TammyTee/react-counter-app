import React, { Component } from "react";
import Counter from "./counterComponent";

class Counters extends Component {
	/*
    Moving from here and lifting to Apps so that this is available to all children
    components

    This becomes a Controlled Component
  */

	/*
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters]; //... clone array
		const index = counters.indexOf(counter);
		// counters[0].value++; // no no! do not update state directly

		counters[index] = { ...counter };
		counters[index].value++;

		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});

		this.setState({ counters });
	};

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
  };
  */

	render() {
		console.log("Counters – Rendered");
		const { onReset, counters, onDelete, onIncrement } = this.props; // object destructuring

		return (
			<React.Fragment>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map(counter => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}
					/>
				))}
			</React.Fragment>
		);
	}
}

export default Counters;
