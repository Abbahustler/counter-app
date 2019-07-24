import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, counters, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-md btn-primary m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            onIncrement={onIncrement}
            onDelete={onDelete}
            key={counter.id}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
