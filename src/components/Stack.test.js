import React from "react";
import { shallow } from "enzyme";
import { Stack } from "./Stack";
import { stack } from "../data/fixtures";

describe("Stack", () => {
  let wrapper;
  let minProps;

  beforeEach(() => {
    minProps = { stack };
    wrapper = shallow(<Stack {...minProps} />);
  });

  it("render without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("render the title", () => {
    expect(wrapper.find("h3").text()).toEqual(minProps.stack.title);
  });

  it("renders the Link home", () => {
    expect(wrapper.find("Link h4").text()).toEqual("Home");
  });

  it("renders the correct numbers of cards", () => {
    expect(wrapper.find("Card").length).toEqual(minProps.stack.cards.length);
  });
});
