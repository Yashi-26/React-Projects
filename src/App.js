import ExpenseItem from "./component/ExpenseItem";

function App() {
  const expenses = [
    
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Dmart",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),location: "samsung store", },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 20),
      location: "tata Showroom",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Furniture shop",
    },
  ];
  return (
    <div className="App">
      <h2> Let's get started! </h2>
      {
        expenses.map(item => {
          return <ExpenseItem title = {item.title} amount = {item.amount} date ={item.date} location={item.location}></ExpenseItem>
        })}
    </div>
  );
}

export default App;
