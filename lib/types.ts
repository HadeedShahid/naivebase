export type Option = {
  label: string;
  value: string;
};

// Category type with optional options array
export type CategoryWithOptions = {
  label: string;
  placeholder: string;
  options: Option[];
};

export type textInput = {
  label: string;
  placeholder: string;
  type: string;
};

// Category type for budget without options
export type BudgetCategory = {
  label: string;
  min: number;
  max: number;
  step: number;
};

export type FilterObj = {
  name: textInput;
  email: textInput;
  platforms: CategoryWithOptions;
  industry: CategoryWithOptions;
  country: CategoryWithOptions;
};

// design: CategoryWithOptions;
// development: CategoryWithOptions;
// numOfPages: CategoryWithOptions;
// timeline: CategoryWithOptions;
// platformType: CategoryWithOptions;
// maintainanceAndSupport: CategoryWithOptions;
// budget: BudgetCategory; // Using the separate BudgetCategory type
