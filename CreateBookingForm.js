import React, { Component } from 'react';
import { Select, Menu, Dropdown, message, TimePicker, DatePicker, Icon, Form, Input, Button, Checkbox } from 'antd';
import BookingTransfer from './CreateBookingFormComponents/BookingTransfer.js'
import moment from 'moment';
import SearchAddress from './CreateBookingFormComponents/SearchAddress.js'
const format = 'HH:mm';
const FormItem = Form.Item;
class CreateBookingForm extends React.Component {
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
        <FormItem {...formItemLayout} label="Kund*">
          {getFieldDecorator('customer', {
            rules: [{
              message: 'Please Enter customer name/number',
            }],
          })(
            <Input prefix={<Icon type="search" style={{ fontSize: 13 }} />} placeholder="Please Enter customer name/number" />
            )}
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
        <FormItem {...formItemLayout} label="Till Address ">
          <SearchAddress />
        </FormItem>
        <BookingTransfer />
         <FormItem {...formItemLayout} label="Telephone number">
          <SearchAddress />
        </FormItem>
        <FormItem {...formTailLayout}>
          <Button type="primary" onClick={this.check}>
            Check
          </Button>
        </FormItem>
      </div>
    );
  }
}
const createForm = Form.create();
const WrappedNormalAddBookingForm = createForm(CreateBookingForm);
export default WrappedNormalAddBookingForm;
