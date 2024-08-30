import './App.css';
import AppBasicForm from './components/form';
import { Flex } from "antd";
import { Card } from 'antd';
// import ValidationTextFields from './components/input';
import { Button } from "antd";
import { useState } from 'react';

function App() {
  const [formType, setType] = useState("login")
  return (
    <div className="container">
      <Flex justify='center' align='center'>

        {formType === "Login"
          ?
          <Card className='card'>
            <h1> Login</h1>
            <AppBasicForm></AppBasicForm>
            <div className="btnDisplay">
              Don't have an Account?<Button type="link" className="signupBtn" onClick={() => setType("Signup")}>Signup</Button>
            </div>
          </Card>
          :
          <Card className='card'>
            <h1> Signup</h1>
            <AppBasicForm></AppBasicForm>
            <div className="btnDisplay">
              Already have an Account?<Button type="link" className="signupBtn" onClick={() => setType("Login")}>Login</Button>
            </div>
          </Card>

        }


      </Flex>
    </div >
  );
}

export default App;
