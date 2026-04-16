import React, { useState } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import axios from 'axios';


const { Option } = Select;

const Register = ({ onNavigate }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        try {
            setLoading(true);
            await addUser(values);
            message.success('Đăng ký thành công!');
        } catch (error) {
            message.error('Có lỗi xảy ra khi đăng ký!');
        } finally {
            setLoading(false);
        }
    };

    const API_KEY = "69dfa01a23415d736a9dd9a4";
    const BASE_URL = "https://mindx-mockup-server.vercel.app/api";

    const addUser = async (values) => {
        const response = await axios.post(`${BASE_URL}/resources/accounts?apiKey=${API_KEY}`, {
            fullName: values.fullName,
            email: values.email,
            phone: values.phone,
            password: values.password,
            location: values.location,
        })
        return response.data.data.data
    }

    const prefixSelector = (
        <div className="flex items-center gap-[6px] pr-2 border-r border-gray-200 mr-2 cursor-pointer h-full">
            <div className="w-[16px] h-[12px] flex rounded-[2px] overflow-hidden drop-shadow-sm">
                <div className="w-1/3 bg-[#008751]"></div>
                <div className="w-1/3 bg-white"></div>
                <div className="w-1/3 bg-[#008751]"></div>
            </div>
            <span className="text-[#374151] font-medium text-[13px]">+234</span>
        </div>
    );

    return (
        <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden bg-[#f9fbfb]">

            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full border-[40px] border-[#eff4f5] opacity-50 pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full border-[30px] border-[#eff4f5] opacity-50 pointer-events-none" />

            <div className="w-full max-w-[360px] z-10 bg-white p-8 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="text-center mb-6">
                    <h1 className="text-[24px] font-bold text-[#111827] tracking-tight">Let's get you started</h1>
                </div>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                >
                    <Form.Item
                        label={<span className="text-[#4b5563] font-medium text-[13px]">Full name</span>}
                        name="fullName"
                        rules={[{ required: true, message: 'Please enter your full name' }]}
                        style={{ marginBottom: '16px' }}
                    >
                        <Input size="large" placeholder="Ade Tiger" className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]" />
                    </Form.Item>

                    <Form.Item
                        label={<span className="text-[#4b5563] font-medium text-[13px]">Email address</span>}
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
                        style={{ marginBottom: '16px' }}
                    >
                        <Input size="large" placeholder="yourname@email.com" className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]" />
                    </Form.Item>

                    <Form.Item
                        label={<span className="text-[#4b5563] font-medium text-[13px]">Phone number</span>}
                        name="phone"
                        rules={[{ required: true, message: 'Please enter your phone number' }, { pattern: /^[0-9]{10}$/, message: 'Please enter a valid phone number' }]}
                        style={{ marginBottom: '16px' }}
                    >
                        <Input
                            size="large"
                            placeholder="800 2738 9700"
                            prefix={prefixSelector}
                            className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]"
                        />
                    </Form.Item>

                    <div className="mb-[16px]">
                        <Form.Item
                            label={<span className="text-[#4b5563] font-medium text-[13px]">Create password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please enter your password' }, { min: 8, message: 'Password must be at least 8 characters' }, { pattern: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, message: 'Password must contain at least one letter, one number, and one special character' }]}
                            style={{ marginBottom: '4px' }}
                        >
                            <Input.Password
                                size="large"
                                placeholder="••••••••"
                                iconRender={(visible) => (visible ? <EyeTwoTone className="text-gray-400" /> : <EyeInvisibleOutlined className="text-gray-400" />)}
                                className="rounded-[8px] text-[14px] placeholder:text-[#9ca3af]"
                            />
                        </Form.Item>
                        <div className="flex flex-col ml-1 leading-tight mt-1">
                        </div>
                    </div>

                    <Form.Item
                        label={<span className="text-[#4b5563] font-medium text-[13px] flex items-center">Location <span className="text-[#9ca3af] font-normal ml-1 text-[12px]">(Optional)</span></span>}
                        name="location"
                        style={{ marginBottom: '24px' }}
                        className="[&_.ant-select-selector]:!rounded-[8px]"
                    >
                        <Select
                            size="large"
                            placeholder={<span className="text-[#9ca3af] text-[14px]">Select Location</span>}
                            className="w-full text-[14px]"
                            popupClassName="rounded-lg"
                        >
                            <Option value="lagos">Lagos</Option>
                            <Option value="abuja">Abuja</Option>
                            <Option value="port-harcourt">Port Harcourt</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item style={{ marginBottom: '16px' }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            loading={loading}
                            className="w-full rounded-[8px] bg-[#2d4b5a] hover:!bg-[#1c323d] hover:!border-transparent border-transparent text-[15px] font-medium shadow-sm transition-all"
                        >
                            Sign Up
                        </Button>
                    </Form.Item>

                    <div className="text-center font-sans">
                        <span className="text-[#6b7280] font-medium text-[13px]">Already a user? </span>
                        <a onClick={() => onNavigate('login')} className="text-[#2d4b5a] hover:text-[#1c323d] cursor-pointer font-semibold underline-offset-[4px] hover:underline text-[13px] transition-colors ml-1">
                            Login
                        </a>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
