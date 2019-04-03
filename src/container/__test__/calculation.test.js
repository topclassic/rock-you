import React from 'react';
import { shallow } from 'enzyme';
import Calculation from '../Calculation';
import snapshotTest from "../../snapshotTest";

describe("Calculation", () => {
  it("test render component correctly", () => {
    const wrapper = shallow(<Calculation />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Calculation testing", () => {
  snapshotTest("render Calculation", <Calculation />);
});
