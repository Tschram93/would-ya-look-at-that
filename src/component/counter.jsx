import React from 'react';

class Counter extends React.Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

    // constructor() {
    //     super();
    //     // must use super(); method prior to using .this to get the Counter instead of undefined
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // Attempting to shorten the code of the constructor above into the handleIncrement() below turning the handleIncrement() into an arrow function.

    handleIncrement() {
        console.log('Increment Clicked!', this);
    }

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
