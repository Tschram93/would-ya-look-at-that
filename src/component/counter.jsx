import React from 'react';

class Counter extends React.Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	};

    handleIncrement = () => {
        this.setState({ count: this.state.count +1 });
    }

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button onClick={() => this.handleIncrement()} className="btn btn-secondary btn-sm"> Increment </button>
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

export default Counter;
