import React from 'react';
import {Button, Form, Input} from 'antd';
import {Link} from 'react-router-dom';

const Register = () => {
  return (
    <div className='authentication'>
        <div className='authentication-form card p-3 '>
            <h1 className='card-title mb-3'>Nice to meet you!</h1>
            <Form layout='vertical'>
                <Form.Item label="Name" name='name'>
                    <Input placeholder='Enter your name' />
                </Form.Item>
                <Form.Item label="Email" name='email'>
                    <Input placeholder='Enter your email' />
                </Form.Item>
                <Form.Item label="Password" name='password'>
                    <Input placeholder='Enter your password' />
                </Form.Item>
                <Button className='primary-button mt-3 my-2'>Register</Button>
                <Link to='/login' className='anchor'>Click here to Login</Link>
            </Form>
        </div>
    </div>
  )
}

export default Register