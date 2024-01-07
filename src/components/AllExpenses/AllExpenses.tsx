import { ChangeEvent } from "react";

type Expenses = {
  desc: string;
  price: number;
  category: string;
};

interface AllExpenses {
  expenses: Expenses[];
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const AllExpenses = ({ expenses, onChangeCategory }: AllExpenses) => {
  return (
    <div className="all-expenses mt-3">
      <h1>All Expenses</h1>
      <select
        id="category"
        className="form-select mb-3"
        onChange={onChangeCategory}
      >
        <option value="allCategories">All Categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>

      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.desc}</td>
              <td>${expense.price.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button className="btn btn-danger">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllExpenses;
