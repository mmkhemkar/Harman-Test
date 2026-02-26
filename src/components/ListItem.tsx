import type { PropsNav } from "../types/formTypes";

export default function ListItem({ id, name }: PropsNav) {
  return <li key={id}>{name}</li>;
}