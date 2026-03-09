import type { PropsNav } from "../types/formTypes";

export default function ListItem({ name }: PropsNav) {
  return <li className="list-item">{name}</li>;
}