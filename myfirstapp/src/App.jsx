import logo from './logo.svg';
import image from './assets/images/myimage.jpg'
import './App.css';

// const full_name = "Khan"
//variables can be created inside or outside
//functions must be created inside the fn App before return 

function App() {
  const full_name = "Khan"
  const exampleFn = (name) => {
    console.log("Parameter passed => ", name)
  }
  //list rendering 
  const listRender = [
    {
      id: 6017,
      name: "Aliza Khan",
      age: 19,
      field: "web developer"
    },
    {
      id: 6020,
      name: "Sara Faisal",
      age: 22,
      field: "flutter developer"
    }
  ]

  const myArr = ["UBIT", " KUBS", " BBA ", 90]

  return (
    <div className="App">
      {/* Access array values */}
      <h6>Array values = {myArr}</h6>
      {/* ---------------------------------- */}

      {/* Rendering list data here through JS map fn */}
      <ul>
        {
          listRender.map((v, id) => <li key={id}>{v.name}</li>)
        }
      </ul>
      {/* ---------------------------------- */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={image} className="App-image" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 style={{
          backgroundColor: "green",
          color: "blue"
        }}>Aliza {full_name}</h1>
        <button onClick={() => exampleFn("Adil khan")}>Click me</button>
      </header>
    </div>
  );
}

export default App;
