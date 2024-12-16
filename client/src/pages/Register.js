import React from 'react';
import {Button, Form, Input} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast'

const Register = () => {
    const navigate = useNavigate();
    const onFinish = async(values) => {
       try {
        const response = await axios.post('/api/user/register', values);
        // console.log(response.data);
        if(response.data.success){
            toast.success(response.data.message);
            toast('Redirecting to the login page');
            navigate('/login');

        }else {
            toast.error(response.data.message)
        }
        
       } catch (error) {
        console.log(error)
        toast.error('Something went wrong')
       }
    }

  return (
    <div className='authentication'>
        <div className='authentication-form card p-3 '>
            <h1 className='card-title mb-3'>Nice to meet you!</h1>
            <Form layout='vertical' onFinish={onFinish}>
                <Form.Item label="Name" name='name'>
                    <Input placeholder='Enter your name' />
                </Form.Item>
                <Form.Item label="Email" name='email'>
                    <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input placeholder='Enter your password' type='password' />
                </Form.Item>
                <Button className='primary-button mt-3 my-2' htmlType='submit'>Register</Button>
                <Link to='/login' className='anchor'>Click here to Login</Link>
            </Form>
        </div>
    </div>
  )
}

export default Register