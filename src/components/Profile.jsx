import { Button, Form, Input, Layout } from 'antd'
 
export default function Profile({ user, token, setUser}) {
    const onFinish=handleProfileUpdate = (values) => {
        //send form values and token to API
        fetch.(`http://localhost:3030/users/${user.uid}`), {
            method: 'PATCH', 
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': token, 
            },
            body: JSON.stringify(values), 
        }
    }

        .then(response => response.json())
    return (
        <Layout.Content style={{ padding: '50px '}}>
        <h1>Profile</h1>
        <Form 
        onFinish={handleProfileUpdate}
        initialValues={user}
        labelCol={{ span: 8 }}>
            <Form.Item label="Name" name="name">
            <Input /> 
            </ Form.Item> 
            <Form.Item label="Email" name="email">
                <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 16, offset: 8}}>
                <Button type="primary" htmlType='submit'></Button>
                </Form.Item>
                </Form>
                </Layout.Content>
    )
}

