import React, { Component } from "react";
import styled from "styled-components";
import { Card, Button, Form, Input, Icon, Tooltip, notification } from "antd";
import { validateNumber } from "../../utils/validate";
import { normalizeDigit } from "../../utils/normalize";
import CalSmallestAmount from "../../utils/calSmallestAmount";

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 16px;
  width: 16px;
  background-color: #e2e2e2;
  border-radius: 50%;
`;

const GroupRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const text = "Calculate smallest quantity of bill and coins";
export class CalContainer extends Component {
  static defaultProps = {
    form: {}
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (values.amount) {
          notification.success({
            duration: 0,
            message: `Calculate amount with ${values.amount}`,
            description: CalSmallestAmount(values.amount)
          });
        }
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Card
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <Form.Item>
            {getFieldDecorator("amount", {
              normalize: value => normalizeDigit(value),
              rules: [
                {
                  validator: (rule, value, callback) =>
                    validateNumber(rule, value, callback),
                  required: true
                }
              ]
            })(
              <Input
                style={{ width: 250 }}
                suffix={
                  <Tooltip placement="right" title={text}>
                    <Circle>
                      <Icon style={{ fontSize: 10 }} type="question" />
                    </Circle>
                  </Tooltip>
                }
                placeholder="number"
              />
            )}
          </Form.Item>
          <GroupRight>
            <Button type="primary" htmlType="submit">
              Calculate
            </Button>
          </GroupRight>
        </Card>
      </Form>
    );
  }
}

const CalContainerForm = Form.create({ name: "calContainer" })(CalContainer);

export default CalContainerForm;
