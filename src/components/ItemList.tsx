import { itemsData } from "../data/Items";
import ListItem from "./ListItem";

export default function ItemList() {
  return (
    <div className="card">
      <h2>List Rendering with Keys</h2>

      <ul>
        {itemsData.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
}