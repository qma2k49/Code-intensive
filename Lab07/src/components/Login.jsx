import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


const Login = ({ onNavigate }) => {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const usersList = await getUsers();

      const user = usersList.find(
        (u) => u.email === values.email && u.password === values.password
      );

      if (user) {
        message.success('Đăng nhập thành công!');
      } else {
        message.error('Sai email hoặc mật khẩu!');
      }

    } catch (error) {
      message.error('Có lỗi xảy ra khi kết nối tới máy chủ!');
    } finally {
      setIsLoading(false);
    }
  };


  const API_KEY = "69dfa01a23415d736a9dd9a4";
  const BASE_URL = "https://mindx-mockup-server.vercel.app/api";

  const getUsers = async () => {
    const response = await axios.get(`${BASE_URL}/resources/accounts?apiKey=${API_KEY}`);
    return response.data.data.data;
  }
  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden bg-[#f9fbfb]">
      {/* Background Decorative Shapes */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full border-[40px] border-[#eff4f5] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full border-[30px] border-[#eff4f5] opacity-50 pointer-events-none" />

      {/* Form Container */}
      <div className="w-full max-w-[360px] z-10 bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-[24px] font-bold text-[#111827] tracking-tight">Welcome back</h1>
          <p className="text-[#6b7280] text-[13px] mt-2">Please enter your details to continue</p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
        >
          <Form.Item
            label={<span className="text-[#4b5563] font-medium text-[13px]">Email address</span>}
            name="email"
            style={{ marginBottom: '16px' }}
          >
            <Input size="large" placeholder="yourname@email.com" className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]" />
          </Form.Item>

          <Form.Item
            label={<span className="text-[#4b5563] font-medium text-[13px]">Password</span>}
            name="password"
            style={{ marginBottom: '12px' }}
          >
            <Input.Password
              size="large"
              placeholder="••••••••"
              iconRender={(visible) => (visible ? <EyeTwoTone className="text-gray-400" /> : <EyeInvisibleOutlined className="text-gray-400" />)}
              className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]"
            />
          </Form.Item>

          <div className="flex justify-end mb-[24px]">
            <a className="text-[13px] font-medium text-[#2d4b5a] hover:text-[#1c323d] cursor-pointer hover:underline underline-offset-[2px] transition-colors">
              Forgot password?
            </a>
          </div>

          <Form.Item style={{ marginBottom: '16px' }}>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full rounded-[8px] bg-[#2d4b5a] hover:!bg-[#1c323d] hover:!border-transparent border-transparent text-[15px] font-medium shadow-sm transition-all"
            >
              Log In
            </Button>
          </Form.Item>

          <div className="text-center font-sans tracking-wide">
            <span className="text-[#6b7280] font-medium text-[13px]">New here? </span>
            <a onClick={() => onNavigate('register')} className="text-[#2d4b5a] hover:text-[#1c323d] cursor-pointer font-semibold underline-offset-[4px] hover:underline text-[13px] transition-colors ml-1">
              Create an account
            </a>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
