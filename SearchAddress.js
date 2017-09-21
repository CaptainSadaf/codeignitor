import React, { Component } from 'react';
import { Select } from 'antd';
const { Option, OptGroup } = Select;
class SearchAddress extends Component {
handleChange=(value)=> {
    console.log(`selected ${value}`);
}
render() {
    return (
        <Select
            defaultValue="lucy"
            style={{ width: 200 }}
            onChange={this.handleChange}
        >
            <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
            </OptGroup>
            <OptGroup label="Engineer">
                <Option value="Yiminghe">yiminghe</Option>
            </OptGroup>
        </Select>
    );
}
}
export default SearchAddress;
