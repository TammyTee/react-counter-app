import React, { Component } from "react";

class Counter extends Component {
	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p>There are no tags!</p>;

	// 	return (
	// 		<ul>
	// 			{this.state.tags.map(tag => (
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	componentDidUpdate(prevProps, prevState) {
		// new state or new props availble here ... can be compared to old ones
		// if change, this is a good place to make a Ajax request for updates
		// from the server

		console.log("prevProps", prevProps);
		console.log("prevState", prevState);

		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from server
		}
	}

	componentWillUnmount() {
		// runs before the component is removed from the DOM
		// do clean up here to prevent memory leaks
		console.log("Counter – Unmount");
	}

	render() {
		//console.log("props", this.props); // includes all attributes we set in Counters component
		console.log("Counter – Rendered");

		const { counter, onDelete, onIncrement } = this.props;

		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>

				<button
					className="btn btn-secondary btn-sm"
					// whenever you need to pass an arg to event handler use the arrow function
					onClick={() => onIncrement(counter)}
				>
					Increment
				</button>

				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => onDelete(counter.id)}
				>
					Delete
				</button>

				{/* {this.renderTags()} */}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}

export default Counter;
