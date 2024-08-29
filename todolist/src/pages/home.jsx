import AppButton from "../components/button";
import '../App.css'
import { useState } from 'react'
// import { Input } from "antd";
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function HomePage() {
    const [todos, setTodos] = useState([{ value: "Aliza", disabled: true }, { value: "Khan", disabled: true }]);
    const [value, setValue] = useState("");
  
    const addTodo = () => {
      setTodos([...todos, { value, disabled: true }]);
      setValue("");
    }
  
    return (
      <div>
        <Space
          direction="vertical"
          style={{
            width: '100%',
          }}
        >
          <Input value={value} onChange={(e) => setValue(e.target.value)} status="warning" placeholder="Warning" />
        </Space>
  
        <Button onClick={() => addTodo()} type="primary">Primary Button</Button>
        <Button onClick={() => setTodos([])} type="primary">Primary Button</Button>

        <br />
  
        <ul>
          {todos.map((v, i) => (
            <li key={i}>
              <Input disabled={v.disabled} defaultValue={v.value} onChange={(e) => v.value = e.target.value} status="warning" placeholder="Warning" />
  
              <Button onClick={() => {
                const oldTodos = [...todos];
                oldTodos.splice(i, 1);
                setTodos(oldTodos);
              }} type="primary" shape="circle" icon={<SearchOutlined />} />
  
              {v.disabled ?
                <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={() => {
                  todos.splice(i, 1, { ...v, disabled: false });
                  setTodos([...todos]);
                }}> Edit</Button>
              :
                <Button type="primary" shape="circle" onClick={() => {
                    v.disabled = true;
                    setTodos([...todos]);
                }}>Update</Button>
              }
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default HomePage;