import React,{useState} from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import './Signup.css'
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

export default function Signup(){

    const [signedup,setSignedup] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
     
    
      const toggle = () => {
        setIsOpen(!isOpen);
      };


    const onFinish = (values) => {
      console.log("values",values)

      const req = {
        fullName: values.fullName,
        email : values.email,
        password: values.password,
        phoneNumber: values.phoneNumber,
        isAdmin:false
    }
    console.log("request",req)
        axios.post('http://localhost:5000/api/users/add',req)
        .then(res => {
          setSignedup(true)
         
    })
        .catch(err => console.error(err))
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Sign Up Failed')
      };

      
      if(signedup){
        return <Redirect to="/login"/>
      }else{
        return(
          <div>
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
  
          <div className="Signup" style={{marginTop:"7%"}}>
              <Form {...layout}
              name="basic"
              initialValues={{
              remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              >
  
         <Form.Item style={{color:'white', margin: "1px 0"}}
                label="Full Name"
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Full Name!',
                  },
                ]}
              >
              <div style={{margin: "14px 0"}}>
                <Input/>
              </div>            
              
              </Form.Item >
              <br />

              
              <Form.Item style={{color:'white', margin: "1px 0"}}
                label="Email"
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


              <Form.Item style={{color:'white', margin: "1px 0"}}
                label="Phone Number"
                name="phoneNumber"
               
              >
              <div style={{margin: "14px 0"}}>
                <Input/>
              </div>            
              
              </Form.Item >
              <br />

              

              <Form.Item style={{color:'white', margin: "1px 0"}}
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