// import { ItemInterface } from "./models/items/Item.interface";
// import { ItemsListComponent } from "./components/items/ItemsList.component";

const items: ItemInterface[]=[
  {
    id: 1,
    name: 'Item 1',
    selected: false
  },
  {
    id: 2,
    name: 'Item 2',
    selected: false
  },
  {
    id: 3,
    name: 'Item 3',
    selected: false
  }
]

function App() {
  return(
    <div>
      <ItemsListComponent items={items}></ItemsListComponent>
    </div>
  );
}

export default App
