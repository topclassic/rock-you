import React from "react";
import { shallow } from "enzyme";
import Layout from "../Layout";
import snapshotTest from "../../snapshotTest";

describe("Layout", () => {
  it("test render component correctly", () => {
    const wrapper = shallow(<Layout />);
    expect(wrapper).toHaveLength(1);
  });
});

describe("Layout testing", () => {
  snapshotTest("render Layout", <Layout />);
});
