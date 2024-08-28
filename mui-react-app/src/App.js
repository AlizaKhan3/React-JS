import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Card from './components/card';
// function Card(props){
//   function Card({v}){
//   // console.log(props, "props")
//   console.log({v})
//   return(
//     <div>
//       <h2>{v}</h2>
//     </div>
//   )
// }


function App() {
  const arrPC = ["a", "b", "c", "d", "e"]
  const arrCP = ["1", "2", "3"]
  //create fn to send data from parent to child
  const sendDataToParent = (a ) =>{
    console.log("parent-->", a)
  }
  return (
    <div>
    {arrPC.map((v,i) => (
      <Card key={i} v={v} i={i} sendDataToParent={sendDataToParent}/>
    ))}
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">Success</Button>
      <Button variant="outlined" color="error">Error</Button>
      <br/>
      
    
    </div>
      
  );
}

export default App;
