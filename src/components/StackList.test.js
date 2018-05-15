import React from "react";
import { shallow } from "enzyme";
import { StackList } from "./StackList";
import { stackList as stacks } from "../data/fixtures";

describe("StackList", () => {
  let wrapper;
  let minProps;

  beforeEach(() => {
    minProps = { stacks };
    wrapper = shallow(<StackList {...minProps} />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("It should render correct number of Link", () => {
    expect(wrapper.find("Link").length).toEqual(minProps.stacks.length);
  });

  it("It should render Link with stack.id", () => {
    let renderedStacks = wrapper.find("Link");

    renderedStacks.forEach((stack, index) => {
      expect(stack.find("Link").prop("to")).toEqual(`/stack`);
    });
  });

  it("renders the title of each stack", () => {
    let renderedStacks = wrapper.find("Link");

    renderedStacks.forEach((stack, index) => {
      expect(stack.find("h4").text()).toEqual(stacks[index].title);
    });
  });
});
