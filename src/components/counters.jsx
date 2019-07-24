import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-md btn-primary m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
