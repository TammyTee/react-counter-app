import React, { Component } from "react";
import Navbar from "./components/navbarComponent";
import Counters from "./components/countersComponent";
import "./App.css";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	constructor(props) {
		super(props);
		console.log("App - Contructor", this.props);

		// can set state directly during initialization based on props being passed in
		// this.state = this.props.something;
	}

	componentDidMount() {
		console.log("App - Mounted");
		// great place to make Ajax calls to get data from the server
		// ie: this.setState({movies});
	}

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

	render() {
		console.log("App - Rendered");

		return (
			<React.Fragment>
				<Navbar
					totalCounter={this.state.counters.filter(c => c.value > 0).length}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
