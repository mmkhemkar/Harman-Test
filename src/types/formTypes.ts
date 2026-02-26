export interface FormData {
  name: string;
  age: string;
  email: string;
  password: string;
}

export interface FormErrors {
  name?: string;
  age?: string;
  email?: string;
  password?: string;
}

export interface Props {
  view: string;
  setView: (value: string) => void;
}

export interface PropsNav {
  id?: number;
  name: string;
}

export type User = FormData;