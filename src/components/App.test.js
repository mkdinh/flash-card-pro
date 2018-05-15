import React from "react";
import { mount, shallow } from "enzyme";
import App from "./App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    // wont have context of provider
    // test app without redux
    wrapper = shallow(<App />);
  });

  it("renders without exploding", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the 'Flashcard Pro' title", () => {
    expect(wrapper.find("h2").text()).toEqual("Flashcard Pro");
  });

  it("renders a link to create new stacks", () => {
    expect(wrapper.find("Connect(StackList)").exists()).toBe(true);
  });

  it("renders a link to create new stacks", () => {
    expect(wrapper.find("Link h4").text()).toEqual("Create a New Stack");
  });
});
