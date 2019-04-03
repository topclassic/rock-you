import React, { Component } from "react";
import styled from "styled-components";
import { Card, Button, Form, Input, Icon } from "antd";
import CalSmallestAmount from "../../utils/calSmallestAmount";

class CalContainer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.amount) {
          console.log(
            ' CalSmallestAmount("124.67");',
            CalSmallestAmount("124.67")
          );
        }
        console.log("Received values of form: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log("CalSmallestAmount");
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Card style={{ width: 300, height: 150 }}>
          <Form.Item>
            {getFieldDecorator("amount", {
              rules: [{ required: true, message: "Please input number" }]
            })(
              <Input
                suffix={<Icon type="exclamation" />}
                placeholder="number"
              />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Calculate
          </Button>
        </Card>
      </Form>
    );
  }
}

const CalContainerForm = Form.create({ name: "calContainer" })(CalContainer);

export default CalContainerForm;
