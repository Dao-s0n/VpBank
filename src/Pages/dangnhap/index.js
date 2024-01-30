import styles from './Login.scss'
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Button,Checkbox,Form,Input } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';


const cx = classNames.bind(styles)


function Login( {setLoggeIn}) {
   const navi = useNavigate()
   const onFinish = async (values) => {
    try {
      const response = await fetch('https://vpbfoapi.navisoft.com.vn/login/GeneratetokenV2', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: values.username,
          Password: values.password,
          IdCardNo: "1",
          IsListedSecAcct: "Y",
          Ip: "12345"
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.Token) {
          console.log('JWT Token:', data.Token);
          alert('Đăng nhập thành công');
          setLoggeIn(true);
          // Assuming you have a function called `navi` to navigate, update accordingly
          navi('/');
        } else {
          alert('Sai mật khẩu hoặc tài khoản!');
        }
      } else {
        console.log('Đăng nhập thất bại!');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
        
    
    return <div className={cx('Wrapper')}>
    
      <div className={cx('Img-Login')}>
        
          <img src="pasted image 0.jpg" alt="" className='img'/>
        
      </div>
      <div className={cx('login-interface')}>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='form'
        >
        <h1>Đăng nhập</h1>
          
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            <Input  />
          </Form.Item>
          

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            <Input.Password  />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Lưu tài khoản</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    
  </div>
}

export default Login;