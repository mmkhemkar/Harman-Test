import { itemsData } from "../data/Items";
import ListItem from "./ListItem";

export default function ItemList() {
  return (
    <div className="card list-card">
      <h2 className="list-title">List Rendering with Keys</h2>

      <ol className="item-list">
        {itemsData.map((item) => (
          <ListItem
            key={item.id}
            name={item.name}
          />
        ))}
      </ol>
    </div>
  );
}