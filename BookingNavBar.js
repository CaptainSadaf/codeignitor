import React, { Component } from 'react';
import { Menu, Icon, Layout } from 'antd';
import './App.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer, Sider } = Layout;
export default class BookingHeader extends React.Component {
  state = {
    collapsed: true,
  };
  componentWillMount() {
    this.setState({
      collapsed: true
    })
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });

  }
  render() {
    const user_style = {
      float: "right",
    }
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          theme="dark"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}

        >
       {/*<div><img className="logo" src="https://bestmile.com/wp-content/uploads/2016/10/logo-trapeze.jpg" width="20" /></div>*/}

        <Menu.Item style={user_style} key="setting" >
            <Icon type="setting" />Setting
        </Menu.Item>
          <Menu.Item style={user_style} key="alipay" float="right">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer"><Icon type="user" />User Profile</a>
          </Menu.Item>
          {/*<SubMenu  style={{ float: 'right' }}key="alipay1" title={<span ><Icon type="setting" />Settings</span>} >
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>*/}
        </Menu>
       </div>
    );
  }
}