import React from 'react';

class Counter extends React.Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

// Binding is very powerful. Remember to use in the future!

    handleIncrement = () => {
        // React uses and requires setState() to update the DOM to what has changed.
        this.setState({ count: this.state.count +1 });
    }                   // is taking the count state and adjusting it to increase by one each time the function is called.

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'badge text-black m-2 bg-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

// renderTags() {
//     if (this.state.tags.length === 0)
//         return <p>There are currently no tags.</p>;

//     return (
//         <ul>
//             {this.state.tags.map((tag) => (
//                 <li key={tag}>{tag}</li>
//             ))}
//         </ul>
//     );
// }
// {this.renderTags()}

export default Counter;
