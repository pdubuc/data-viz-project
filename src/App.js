import BarChart from "./Chart";
import sunshine from "./sunshine.json";
import Select from "react-select";
import { useState } from "react";

const options = [
  { value: "JUL", label: "July" },
  { value: "JUN", label: "June" },
  { value: "AUG", label: "August" },
];

function App() {
  const [month, setMonth] = useState(options[0])
  const data = sunshine
    .map((d) => {
      return { city: d.CITY, sunshine: d[month.value] };
    })
    .sort((a, b) => b.sunshine - a.sunshine)
    .slice(0, 20);

  console.log(data);
  return (
    <div className="App">
      <div className="header">
        <h1>Sunshine By City</h1>
        <Select defaultValue={month} onChange={setMonth} options={options} />
      </div>
      <div className="container">
        <BarChart data={data} height={600} width={900} />
      </div>
    </div>
  );
}

export default App;
