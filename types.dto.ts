export type FieldProps = {
  label: string;
  key: string;
  className?: string;
};

export type BaseTableProps<T> = {
  fields: Array<FieldProps>;
  rows: Array<any>;
  TableLoading: boolean;
};

export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type GeoProps = {
  lat: string;
  lng: string;
};

export type AddressesProps = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type UserProps = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressesProps;
  geo: GeoProps;
};

export type QueryString = {
  _page: number;
  _limit: number;
  q: string;
};

export type TablePaginationProps = {
  currentPage: 1;
  totalPage: 1;
  perPage: 20;
};
