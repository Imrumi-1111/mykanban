import styles from './todoCard.module.css';
import TodoList from './todolist';
import { useState } from 'react';

export default function TodoCard() {
  const [todoItems, setTodoItems] = useState([]);
  const [showList, setShowList] = useState(false);

  function handleToggleList() {
    setShowList(!showList);
  }

  function handleAddItems(itemText) {
    setTodoItems([...todoItems, itemText]);
  }

  function handleTodoList(event) {
    if (event.keyCode === 13) {
      alert("")
      const newItemText = event.target.value.trim();
      if (newItemText !== '') {
        handleAddItems(newItemText);
        event.target.value = '';
      }
    }
  }

  return (
    <div>
      {!showList && (
        <div className={styles.TodoCard}>
          <button className={styles.field} onClick={handleToggleList}>
            + Add a list
          </button>
        </div>
      )}
      {showList && (
        <div>
          <TodoList onKeyDown={handleTodoList} items={todoItems} />
        </div>
      )}
    </div>
  );
}
