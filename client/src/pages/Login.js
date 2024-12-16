import React from 'react';
import {Button, Form, Input} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const onFinish = async(values) => {
        // console.log('Values receiving from forms are: ', values);
        try {
            const response = await axios.post('/api/user/login', values);
            // console.log(response.data);
            if(response.data.success){
                toast.success(response.data.message);
                toast('Redirecting to the home page');
                navigate('/');
                localStorage.setItem('token', response.data.data)
            }else {
                toast.error(response.data.message)
            }
            
           } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
           }
    }

  return (
    <div className='authentication'>
        <div className='authentication-form card p-3 '>
            <h1 className='card-title mb-3'>Welcome Back</h1>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label="Email" name='email'>
                    <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input placeholder='Enter your password' type='password' />
                </Form.Item>
                <Button className='primary-button mt-3 my-2' htmlType='submit'>Login</Button>
                <Link to='/register' className='anchor'>Click here to Register</Link>
            </Form>
        </div>
    </div>
  )
}

export default Login