import React from "react";

function ExpenseList({ expenses, onEdit, onDelete }) {
  if (expenses.length === 0) {
    return <p>No expenses added</p>;
  }

  return expenses.map((e, i) => (
    <div key={i} className="card p-3 mb-2">
      <strong>{e.name}</strong>
      <p className="mb-1">
        ₹{e.amount} - {e.category}
      </p>

      <button
        className="btn btn-warning btn-sm me-2"
        onClick={() => onEdit(i)}
      >
        Edit
      </button>

      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(i)}
      >
        Delete
      </button>
    </div>
  ));
}

export default ExpenseList;
