import React, { useState } from 'react';
import styles from '../../css/currency.module.css';

const Currency = () => {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(0);

  const currencyList = [
    'USD $',
    'EUR @',
    'JPY #',
  ];

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (index) => {
    setSelectedOption(index);
    setIsOptionsOpen(false);
  };

  const handleKeyDown = (index) => (e) => {
    switch (e.key) {
      case ' ':
      case 'SpaceBar':
      case 'Enter':
        e.preventDefault();
        setSelectedThenCloseDropdown(index);
        break;
      default:
        break;
    }
  };

  const handleListKeyDown = (e) => {
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        setIsOptionsOpen(false);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedOption(
          selectedOption - 1 >= 0 ? selectedOption - 1 : currencyList.length - 1,
        );
        break;
      case 'ArrowDown':
        e.preventDefault();
        setSelectedOption(
          selectedOption === currencyList.length - 1 ? 0 : selectedOption + 1,
        );
        break;
      default:
        break;
    }
  };

  const symbol = currencyList[selectedOption].split(' ')[1];

  const currencyOptions = currencyList.map((option, index) => (
    <li
      key={Math.random()}
      className={styles.list}
      id={option}
      role="option"
      aria-selected={selectedOption === index}
      tabIndex={0}
      onKeyDown={handleKeyDown(index)}
      onClick={() => {
        setSelectedThenCloseDropdown(index);
      }}
    >
      {option}
    </li>
  ));

  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOptionsOpen}
        className={`${styles.button} ${isOptionsOpen ? styles.expanded : ''}`}
        onClick={toggleOptions}
        onKeyDown={handleListKeyDown}
      >
        {symbol}
      </button>
      <ul
        className={`${styles.options} ${isOptionsOpen ? styles.show : ''}`}
        role="listbox"
        aria-activedescendant={currencyList[selectedOption]}
        tabIndex={-1}
        onKeyDown={handleListKeyDown}
      >
        {currencyOptions}
      </ul>
    </div>
  );
};

export default Currency;
