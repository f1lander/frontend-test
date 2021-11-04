export interface IFilters {
  isOpenNow: boolean;
  price: Array<string> | undefined;
  categories: Array<string> | undefined;
}

export interface ICategory {
  parent_categories: Array<{ title: string }>;
  title: string;
  alias: string;
}
