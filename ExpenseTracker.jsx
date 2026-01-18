import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateExpense = (expense) => {
    if (editIndex === null) {
      setExpenses([...expenses, expense]);
    } else {
      const updated = [...expenses];
      updated[editIndex] = expense;
      setExpenses(updated);
      setEditIndex(null);
    }
  };

  const editExpense = (index) => setEditIndex(index);

  const deleteExpense = (index) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  return (
    <div className="container mt-5">
      <h3 className="mb-3">Expense Tracker</h3>

      <ExpenseForm
        expenses={expenses}
        editIndex={editIndex}
        onSubmit={addOrUpdateExpense}
      />

      <ExpenseList
        expenses={expenses}
        onEdit={editExpense}
        onDelete={deleteExpense}
      />
    </div>
  );
}

export default ExpenseTracker;
