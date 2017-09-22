import React, { Component } from 'react';
import { Card, Row, Col, Modal, Radio, Select, Menu, Dropdown, message, TimePicker, DatePicker, Icon, Form, Input, Button, Checkbox } from 'antd';
import BookingTransfer from './CreateBookingFormComponents/BookingTransfer.js'
import moment from 'moment';
import SearchAddress from './CreateBookingFormComponents/SearchAddress.js';
import BookingMedrenseder from './CreateBookingFormComponents/BookingMedrenseder.js'
const Search = Input.Search;

const format = 'HH:mm';
const FormItem = Form.Item;
class CreateBookingForm extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
    };
    const formTailLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 8, offset: 4 },
    };
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">1st menu item</Menu.Item>
        <Menu.Item key="2">2nd menu item</Menu.Item>
        <Menu.Item key="3">3d menu item</Menu.Item>
      </Menu>
    );
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Client and Address" bordered={true}>
                <FormItem {...formItemLayout} label="Kund*">
                  <Search
                    placeholder="Enter customer name/number'"
                    onSearch={value => alert(value)}
                  />
                </FormItem>
                <FormItem {...formItemLayout} label="Datum*">
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                    placeholder="Select Time"
                  />
                </FormItem>

              </Card>
            </Col>
            <Col span={12}>
              <Card title="Booking List" bordered={false}><BookingTransfer /></Card>
            </Col>
          </Row>
        </div>
        <h1>Add Boooking </h1>
        <FormItem {...formItemLayout} label="Kund*">
          <Search
            placeholder="Enter customer name/number'"
            onSearch={value => alert(value)}
          />
        </FormItem>
        <FormItem {...formItemLayout} label="Datum*">
          <DatePicker
            showTime
            format="YYYY-MM-DD HH:mm:ss"
            placeholder="Select Time"
          />
        </FormItem>
        <FormItem {...formItemLayout} label="Tid*"><TimePicker defaultValue={moment('12:08', format)} format={format} /></FormItem>
        <FormItem {...formItemLayout} label="Fran Address ">
          <SearchAddress />
        </FormItem>
        <FormItem {...formItemLayout} label="Fran Address Kommentor ">
          <Input placeholder="Fran Address Kommentor" />
        </FormItem>
        <FormItem {...formItemLayout} label="Till Address ">
          <SearchAddress />
        </FormItem>
        <FormItem {...formItemLayout} label="Till Address Kommentor">
          <Input placeholder="Till Address Kommentor" />
        </FormItem>
        <div><Icon style={{ fontSize: "50px" }} type="arrow-up" /><Icon style={{ fontSize: "50px" }} fontSize="100px" type="arrow-down" /> </div>
        <FormItem {...formItemLayout} label="Madresenar">
          <BookingMedrenseder />
        </FormItem>
        <div> <BookingTransfer /> </div>
        <FormItem {...formTailLayout}>
          <Radio>Ensamkare</Radio>
        </FormItem>
        <FormItem {...formItemLayout} label="Tele Phone Kommentor">
          <Input placeholder="TelePhone Kommentor" />
        </FormItem>
        <FormItem {...formItemLayout} label="Kommentor">
          <Input placeholder="Kommentor" />
        </FormItem>
        <div>
          <Button type="primary" onClick={this.showModal}>Open</Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div >

    );
  }
}
const createForm = Form.create();
const WrappedNormalAddBookingForm = createForm(CreateBookingForm);
export default WrappedNormalAddBookingForm;
