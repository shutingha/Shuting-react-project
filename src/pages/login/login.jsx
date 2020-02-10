import React, { Component } from 'react'
import {Form,Icon,Input,Button,Checkbox } from 'antd'
import logo from './images/logo.png'
import './css/login.less'
const {Item} = Form


class Login extends Component{
render(){
    const { getFieldDecorator } = this.props.form;
    console.log(this.props)
return (
    <div id="all">
       <div className="top">
           <img src={logo} alt=''/>
           <h1>商品管理系统</h1>
          </div>
       <div className="content">
           <h1>用户登录</h1>
           <Form onSubmit={this.handleSubmit} className="login-form">
        <Item>

        {getFieldDecorator('username', {
            rules: [
                { required: true, message: '用户名必须输入!' },
                {max:12,message:'用户名要小于12位'},
                {min:4,message:'用户名要大于4位'},
                {pattern:/^\w+$/,message:'用户名必须有字母,数字,下划线组成'}
            ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Item>
        <Item>
        <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
        </Item>
        <Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Item>
      </Form>
       </div>
    </div>
)
}
}
//form.create()返回值依然是一个函数,该函数拿着login加工之后(还函数接收一个组件),返回一个新组件
//返回的新组件多了一个重要属性:form
// const WrappedLogin = Form.create()(Login);
// export default WrappedLogin
export default Form.create()(Login);