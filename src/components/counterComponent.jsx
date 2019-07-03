import React, { Component } from "react";

class Counter extends Component {
	//includes any data the component needs
	state = {
		value: this.props.counter.value,
		tags: ["tag 1", "tag 2", "tag 3"]
	};

	// constructor() {
	// 	super();
	//  //returns new instance of handleIncrement function ref current obj
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	renderTags() {
		if (this.state.tags.length === 0) return <p>There are no tags!</p>;

		return (
			<ul>
				{this.state.tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
		);
	}

	handleIncrement = product => {
		// no access to "this" in an event handler,
		// using an arrow function resolves – but experimental

		this.setState({ value: this.state.value + 1 });
	};

	render() {
		//console.log("props", this.props); // includes all attributes we set in Counters component

		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					className="btn btn-secondary btn-sm"
					// whenever you need to pass an arg to event handler use the arrow function
					onClick={() => this.handleIncrement({ id: 1 })}
				>
					Increment
				</button>
				<button
					className="btn btn-danger btn-sm m-2"
					onClick={() => this.props.onDelete(this.props.counter.id)}
				>
					Delete
				</button>
				{/* {this.state.tags.length === 0 && "Please create a new tag"} */}

				{this.renderTags()}
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { value: count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
