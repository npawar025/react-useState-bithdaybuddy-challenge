import { useState } from "react";
import data from "./data";
import { List } from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  // console.log(people);

  const handleClear = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people}></List>
        <button type="button" className="btn btn-block" onClick={handleClear}>
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
