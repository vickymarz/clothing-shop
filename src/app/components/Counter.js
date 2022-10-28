import React from 'react';
import Button from './Button';
import styles from '../../css/Counter.module.css';

const Counter = () => (
  <div className={styles.row}>
    {/* <div className={styles.row}>
      <button
        className={styles.button}
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <span className={styles.value}>{count}</span>
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
    </div>
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <button
        className={styles.button}
        onClick={() => dispatch(incrementByAmount(incrementValue))}
      >
        Add Amount
      </button>
      <button
        className={styles.asyncButton}
        onClick={() => dispatch(incrementAsync(incrementValue))}
      >
        Add Async
      </button>
      <button
        className={styles.button}
        onClick={() => dispatch(incrementIfOdd(incrementValue))}
      >
        Add If Odd
      </button>
    </div> */}
    <Button
      type="button"
      className={styles.button}
      label="Increment value"
    >
      +
    </Button>
    <span className={styles.value}>{2}</span>
    <Button
      className={styles.button}
      label="Decrement value"
    >
      -
    </Button>
  </div>
);

export default Counter;
