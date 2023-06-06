import React, { useState } from 'react';
import styles from './todolist.module.css';

export default function TodoList() {
  const [items, setItems] = useState([]);

  function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
      const newItem = event.target.value.trim();
      if (newItem !== '') {
        setItems([...items, newItem]);
        event.target.value = '';
      }
    }
  }

  return (
    <div className={styles.TodoList}>
      <input className={styles.list} placeholder="To Do" />
      <div className={styles.TodoCard}>
        <input
          onKeyDown={handleEnterKeyPress}
          className={styles.field}
          placeholder="+ Add a card"
        />
      </div>
      <div className={styles.listTodo}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}