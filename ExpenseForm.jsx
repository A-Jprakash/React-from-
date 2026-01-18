import React, { useEffect, useState } from "react";

function ExpenseForm({ expenses, editIndex, onSubmit }) {
  const [expense, setExpense] = useState({
    name: "",
    amount: "",
    category: ""
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editIndex !== null) {
      setExpense(expenses[editIndex]);
    }
  }, [editIndex, expenses]);

  const handleChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let err = {};

    if (!expense.name.trim()) err.name = "Expense name is required";
    if (!expense.amount || expense.amount <= 0)
      err.amount = "Amount must be greater than 0";
    if (!expense.category.trim()) err.category = "Category is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(expense);
    setExpense({ name: "", amount: "", category: "" });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 mb-4">
      <div className="mb-2">
        <input
          className="form-control"
          name="name"
          placeholder="Expense Name"
          value={expense.name}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.name}</small>
      </div>

      <div className="mb-2">
        <input
          className="form-control"
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.amount}</small>
      </div>

      <div className="mb-2">
        <input
          className="form-control"
          name="category"
          placeholder="Category"
          value={expense.category}
          onChange={handleChange}
        />
        <small className="text-danger">{errors.category}</small>
      </div>

      <button className="btn btn-primary">
        {editIndex === null ? "Add Expense" : "Update Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;
