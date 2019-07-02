import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
		tags: ["tag 1", "tag 2", "tag 3"]
	}; //includes any data the component needs

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

		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					className="btn btn-secondary btn-sm"
					// onClick={this.handleIncrement}
					// whenever you need to pass an arg to event handler use the arrow function
					onClick={() => this.handleIncrement({ id: 1 })}
				>
					Increment
				</button>
				{/* {this.state.tags.length === 0 && "Please create a new tag"} */}

				{this.renderTags()}
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}
}

export default Counter;
