function App() {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://cafenomad.tw/api/v1.2/cafes/tainan"
  )
    .then((res) => res.json())
    .then((res) => console.log(res));
  return <div className="App">hello</div>;
}

export default App;
