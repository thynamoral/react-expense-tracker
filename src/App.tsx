import { useState, ChangeEvent } from "react";
// components
import Form from "./components/Form/Form";
import AllExpenses from "./components/AllExpenses";
// types
import { FormInput } from "./types";

// category options
const options = [
  { value: "allCategories" },
  { value: "groceries" },
  { value: "utilities" },
  { value: "entertainment" },
];

function App() {
  const [allExpenses, setAllExpenses] = useState([
    {
      desc: "Milk",
      price: 5,
      category: "groceries",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState(options[0].value);

  // handle form submit
  const addExpenseRecord = (data: FormInput) => {
    setAllExpenses([...allExpenses, data]);
  };

  // handle onChange Category
  const onChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedCategory(value);
  };

  console.log(selectedCategory);

  return (
    <div className="app">
      <Form addExpenseRecord={addExpenseRecord} />
      <AllExpenses expenses={allExpenses} onChangeCategory={onChangeCategory} />
    </div>
  );
}

export default App;
