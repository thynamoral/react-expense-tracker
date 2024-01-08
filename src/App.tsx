import { useState, ChangeEvent } from "react";
// components
import Form from "./components/Form/Form";
import AllExpenses from "./components/AllExpenses";
// types
import { FormInput } from "./types";

// category options
const options = ["allCategories", "groceries", "utilities", "entertainment"];

function App() {
  const [allExpenses, setAllExpenses] = useState([
    {
      desc: "Milk",
      price: 5,
      category: "groceries",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(options[0]);

  // handle form submit
  const addExpenseRecord = (data: FormInput) => {
    setAllExpenses([...allExpenses, data]);
  };

  // handle onChange Category
  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCategory(value);
  };

  // handle onDelete expense record
  const deleteRecord = (recordIndex: number) => {
    setAllExpenses((currentExpenses) => {
      return currentExpenses.filter((_, index) => index != recordIndex);
    });
  };

  return (
    <div className="app">
      <Form addExpenseRecord={addExpenseRecord} />
      <AllExpenses
        expenses={allExpenses}
        currentSelected={selectedCategory}
        onChangeCategory={onChangeCategory}
        onDelete={deleteRecord}
      />
    </div>
  );
}

export default App;
