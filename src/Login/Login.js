import React,{useState} from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import './Login.css'
import { Redirect } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';

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

    const [loggedIn,setLoggedIn] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
     
    
      const toggle = () => {
        setIsOpen(!isOpen);
      };


    const onFinish = (values) => {
        axios.post('http://localhost:5000/api/auth',{
            email : values.email,
            password: values.password
        })
        .then(res => {
          setLoggedIn(true)
          localStorage.setItem("loggedIn",true)
          localStorage.setItem('userId',res.data.user._id)
          localStorage.setItem('token',res.data.token)
          localStorage.setItem('userBody',JSON.stringify(res.data.user))
    })
        .catch(err => console.error(err))
      };
    
      const onFinishFailed = (errorInfo) => {
        alert('invalid email or password')
      };

      
      if(loggedIn){
        return <Redirect to="/"/>
      }else{
        return(
          <div>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
  
          <div className="login" style={{marginTop:"10%"}}>
              <Form {...layout}
              name="basic"
              initialValues={{
              remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              >
  
              <Form.Item style={{color:'white', margin: "14px 0"}}
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
              <div style={{margin: "14px 0"}}>
                <Input/>
              </div>
              
              </Form.Item >
              <br />
              <Form.Item style={{color:'white', margin: "14px 0"}}
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
              <div style={{margin: "14px 0"}}>
              <Input.Password />
              </div>
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
          </div>
      )
      }
 
}