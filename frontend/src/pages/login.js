import { useState } from "react";
import { login } from "../api";
import { Button, Checkbox, Form, Input, Card } from "antd";

const Login = () => {
  const [state, setState] = useState({});

  function handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  function submitLogin(event) {
    event.preventDefault();
    login(this.state)
      .then((token) => (window.location = "/"))
      .catch((err) => alert(err));
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: '#ececec'
      }}
    >
      <Card>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
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
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
      {/* <div className="container">
        <hr />
        <div className="col-sm-8 col-sm-offset-2">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3>Log in </h3>
            </div>
            <div className="panel-body">
              <form onSubmit={submitLogin}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-default">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Login;
