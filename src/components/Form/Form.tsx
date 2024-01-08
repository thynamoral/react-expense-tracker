import { useForm, SubmitHandler } from "react-hook-form";
// types
import { FormInput } from "../../types";

interface Form {
  addExpenseRecord: (data: FormInput) => void;
}

const Form = ({ addExpenseRecord }: Form) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = (data) => {
    console.log(data);
    addExpenseRecord(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Expense Tracker Form</h2>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label">
          Description
        </label>
        <input
          {...register("desc", { required: true, minLength: 3 })}
          id="desc"
          type="text"
          className="form-control"
        />
        {(errors.desc?.type === "required" ||
          errors.desc?.type === "minLength") && (
          <p className="text-danger">
            Description must be at least 3 characters.
          </p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          {...register("price", { required: true, valueAsNumber: true })}
          id="price"
          type="number"
          className="form-control"
        />
        {errors.price?.type === "required" && (
          <p className="text-danger">Price is required.</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
