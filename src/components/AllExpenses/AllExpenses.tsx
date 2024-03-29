import { ChangeEvent } from "react";
import "../../App.css";

type Expenses = {
  desc: string;
  price: number;
  category: string;
};

interface AllExpenses {
  expenses: Expenses[];
  currentSelected: string;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onDelete: (recordIndex: number) => void;
}

const AllExpenses = ({
  expenses,
  currentSelected,
  onChangeCategory,
  onDelete,
}: AllExpenses) => {
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

      <div className="table-content">
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
            {expenses
              .filter((expense) => {
                if (currentSelected == "allCategories") return expense;
                return expense.category == currentSelected;
              })
              .map((expense, index) => (
                <tr key={index}>
                  <td>{expense.desc}</td>
                  <td>${expense.price.toFixed(2)}</td>
                  <td>{expense.category}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(index)}
                    >
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>
                $
                {expenses
                  .filter((expense) => {
                    if (currentSelected === "allCategories") return expense;
                    return expense.category === currentSelected;
                  })
                  .reduce((sum, item) => {
                    return sum + item.price;
                  }, 0)}
              </th>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllExpenses;
