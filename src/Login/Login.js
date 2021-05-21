import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Form, Input, Button, Checkbox } from 'antd';
import { history} from '../history'


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
       
    const [places,setPlaces] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/api/lieu')
            .then(res=> {
                
                setPlaces(res.data)

            })
            .catch(err => console.error(err))
    },[])


        
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
        <div>
            <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
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
        <Input />
      </Form.Item>

      <Form.Item
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}