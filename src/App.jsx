import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';
import FilteredList from './FilteredList';

function App() {
  const produce = [
    { name: "Apple", type: "Fruit" },
    { name: "Banana", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Broccoli", type: "Vegetable" },
    { name: "Orange", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
  ];

  return (
    <>
      <main className="center">
        <div className="title">CW 05 - React</div>
        <HelloWorld />
        <Counter />
        <FilteredList items={produce} />
      </main>
    </>
  )
}

export default App
