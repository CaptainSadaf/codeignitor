import React, { Component } from 'react';
import { Tabs, Icon } from 'antd';
import CreateBookingForm from './CreateBookingForm.js';
import BookingTable from './BookingTable.js'
const TabPane = Tabs.TabPane;
class BookingTabs extends Component {
    render() {
        return (
        <div>
            <Tabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="plus-square" />Create Booking</span>} key="1"><div><CreateBookingForm/></div> </TabPane>
                <TabPane tab={<span><Icon type="contacts" />Booking Clients</span>} key="2"><BookingTable/></TabPane>
                <TabPane tab={<span><Icon type="schedule" />Schedule Booking</span>} key="3">Tab 3</TabPane>

            </Tabs>
        </div>
        );
    }
}
export default BookingTabs;