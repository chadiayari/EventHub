import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import { history} from '../history'
import './Login.css'


const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

export default function Login(){
               
    const onFinish = (values) => {
        axios.post('http://localhost:5000/api/auth',{
            email : values.email,
            password: values.password
        })
        .then(res => history.push("/"))
        .catch(err => console.error(err))
      };
    
      const onFinishFailed = (errorInfo) => {
        alert('invalid email or password')
      };


    return(
        <div className="login">
            <Form {...layout}
            name="basic"
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >

            <Form.Item style={{color:'white'}}
              label="email"
              name="email"
              rules={[
                {
                  required: true,
                  type:"email",
                  message: 'Please input a valid email!',
                },
              ]}
            >
            <Input/>
            
            </Form.Item>
            <br />
            <Form.Item style={{color:'white'}}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
             
            <Input.Password />
            </Form.Item>

            <Form.Item style={{color:'white'}} {...tailLayout} name="remember" valuePropName="checked"> 
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" className="button">
                Submit
              </Button>
            </Form.Item>

          </Form>
        </div>
    )
}