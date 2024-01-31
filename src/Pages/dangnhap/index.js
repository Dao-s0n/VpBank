import { useNavigate } from 'react-router-dom';
import { Button,Checkbox,Form,Input, message } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';





function Login( {setLoggeIn}) {
   const navi = useNavigate()
   const onFinish = async (values) => {
    try {
      setLoadings(true)
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
        console.log(data)
        if (data.Token) {
          console.log('JWT Token:', data.Token);
          success();
          setLoggeIn(true);
          navi('/');
        } else {
          error();
        }
      } else {
        console.log('Đăng nhập thất bại!');
      }
    } catch (error) {
      console.error('Lỗi khi gửi yêu cầu đăng nhập:', error);
    } finally {
      setLoadings(false); // Kết thúc hiển thị icon loading sau khi yêu cầu API hoàn thành (thành công hoặc thất bại)
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  //loading
  const [loadings, setLoadings] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Đăng nhập thành công',
      className:'custom-message ',
    });}
  const error = () => {
    messageApi.open({
      type: 'error',
      content: 'Sai mật khẩu hoặc tài khoản',
      className:'custom-message ',
    });
  };
    
        
    
    return <div className='Wrapper'>
    
      <div className='Img-Login'>
      <img src='logo2-02.jpg' className='logo-img' alt=''/>

        
          <img src="pasted image 0.jpg" alt="" className='img'/>
        
      </div>
      <div className='login-interface'>
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
          <Form.Item>
            <img src='logo2-02.jpg' className='logo'alt=''/>
                    <h1>Đăng nhập</h1>
          </Form.Item>
          <b>Tài khoản</b>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Vui lòng nhập tên đăng nhập!' }]}
          >
            
            <Input 
            placeholder='Nhập tài khoản'/>
          </Form.Item>
          
          <b>Mật khẩu</b>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
          >
            
            <Input.Password 
            placeholder='Nhập mật khẩu'/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Nhớ mật khẩu</Checkbox>
          </Form.Item>
          {contextHolder}
          <Form.Item>
            <Button type="primary" htmlType="submit" 
          loading={loadings} 
          >
              Đăng nhập
            </Button>
          </Form.Item>
          <Form.Item >
            <div className='reset-pass'>
              <b>Reset mật khẩu</b>
              <b>Đổi mật khẩu</b>
            </div>
          </Form.Item>
        </Form>
      </div>
    
  </div>
}

export default Login;
