import { Form, Input, Checkbox, Switch, Radio, Select, Button } from "antd";

const LabelCustom = (props) => {
    return (
        <span className="text-[14px] text-[#4a4a4a]">{props.children}</span>
    );
}

const options = [
    { label: 'Dropdown option', value: 'option' },
    { label: 'Dropdown option 1', value: 'option1' },
    { label: 'Dropdown option 2', value: 'option2' },
]

const App = () => {
    return (
        <section className="bg-gray-50 px-6 py-14">
            <div className="max-w-[540px] mx-auto w-full border border-gray-300 rounded-lg p-6">
                <Form layout="vertical">
                    <Form.Item label={<LabelCustom>Name</LabelCustom>} name="name">
                        <Input placeholder="Enter your name" />
                    </Form.Item>
                    <Form.Item label={<LabelCustom>Password</LabelCustom>} name="password"
                        extra={<span className="text-[12px] text-gray-400">Your password is between 4 and 12 characters</span>}>
                        <Input.Password placeholder="Enter your password" />
                    </Form.Item>
                    <Form.Item label={<LabelCustom>Input text label</LabelCustom>} name="input"
                        extra={<span className="text-[12px] text-red-500">Error message informing me of a problem</span>}
                    >
                        <Input status="error" placeholder="Input here" />
                    </Form.Item>

                    <Form.Item>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <div className="flex items-center gap-4">
                            <Switch />
                            <span className="text-[14px] text-[#4a4a4a]">Off</span>
                        </div>
                    </Form.Item>

                    <Form.Item>
                        <Radio.Group orientation="vertical">
                            <Radio value="a">A</Radio>
                            <Radio value="b">B</Radio>
                            <Radio value="c">C</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label={<LabelCustom>Select</LabelCustom>}>
                        <Select placeholder="Select an option" options={options}>
                        </Select>
                    </Form.Item>


                    <Button type="primary">Submit</Button>

                </Form>
            </div>

        </section >
    );
}

export default App;