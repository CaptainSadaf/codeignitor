import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
import BookingNavBar from './BookingNavBar.js';
import BookingTabs from './BookingTabs.js';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class BookingMain extends React.Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout>
                <Sider className="slider"
                    theme="dark"
                    breakpoint="sm"
                    collapsible
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item onclick={() => this.showBoookingClient} key="1">
                            <Icon type="user" />
                            <span className="nav-text">Booking</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span className="nav-text">nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span className="nav-text">nav 3</span>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Icon type="user" />
                            <span className="nav-text">nav 4</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ padding: 0 }} >
                        <BookingNavBar />
                    </Header>
                    <Content style={{ margin: '24px 16px 0', background: '#fff', minHeight: '100%', position: '100% 100%' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 796 }}>
                            <BookingTabs/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}