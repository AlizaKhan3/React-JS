import AppButton from "../components/button";
import '../App.css'
import { useState } from 'react'
// import { Input } from "antd";
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input, Space } from 'antd';
import React from 'react';
import { Button } from 'antd';

function HomePage() {
    const [todos, setTodos] = useState([{ value: "Aliza" }, { value: "Khan" }]);
    const [value, setValue] = useState("")

    const addTodo = () => {
        setTodos([...todos, { value }])
    }

    return (
        <div>
            <Space
                direction="vertical"
                style={{
                    width: '100%',
                }}
            >
                <Input onChange={(e) => setValue(e.target.value)} status="warning" placeholder="Warning" />
            </Space>

            <Button onClick={() => addTodo()} type="primary">Primary Button</Button>

            <br />
            <ul>
                {todos.map((v, i) => <li key={i}> {v.value}</li>)}
            </ul>
        </div>
    );
}

export default HomePage;
