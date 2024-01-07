enum CategoryEnum {
  groceries = "groceries",
  utilities = "utilities",
  entertainment = "entertainment",
}

export interface FormInput {
  desc: string;
  price: number;
  category: CategoryEnum;
}
