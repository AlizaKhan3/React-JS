import logo from './logo.svg';
import './App.css';
import AppButton from './components/button';
import HomePage from './pages/home';
import { Flex } from "antd";


function App() {
  return (
    <Flex justify="center" align="center" style={{marginTop: "3rem"}}>
      <HomePage></HomePage>
    </Flex>
  );
}

export default App;
