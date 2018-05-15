import React from "react";
import { shallow } from "enzyme";
import { StackForm } from "./StackForm";

const changeTitle = "changeTitle";
const changePrompt = "change prompt";
const changeAnswer = "change answer";

describe("StackForm", () => {
  let wrapper;
  let minProps = {};

  beforeEach(() => {
    wrapper = shallow(<StackForm />);
  });

  it("render a link home", () => {
    expect(
      wrapper
        .find("h4")
        .at(0)
        .text(),
    ).toEqual("Home");
  });

  it("render the correc title", () => {
    expect(
      wrapper
        .find("h4")
        .at(1)
        .text(),
    ).toEqual("Create a New Stack");
  });

  it("render a Form component", () => {
    expect(wrapper.find("Form").exists()).toBe(true);
  });

  it("render a button to add a new card", () => {
    expect(
      wrapper
        .find("Button")
        .at(0)
        .props().children,
    ).toEqual("Add Card");
  });

  it("render a button to submit a form", () => {
    expect(
      wrapper
        .find("Button")
        .at(1)
        .props().children,
    ).toEqual("Save and Add the Stack");
  });

  //--------------------------------------------------------
  describe("And updating the title", () => {
    beforeEach(() => {
      wrapper.find("FormControl").simulate("change", {
        target: {
          value: changeTitle,
        },
      });
    });

    it("updates the tittle in state", () => {
      expect(wrapper.state().title).toEqual(changeTitle);
    });
  });

  //--------------------------------------------------------
  describe("When adding a new card", () => {
    beforeEach(() => {
      wrapper
        .find("Button")
        .at(0)
        .simulate("click");
    });

    it("adds a new card to the state", () => {
      expect(wrapper.state().cards.length).toEqual(1);
    });

    it("renders the prompt section", () => {
      expect(
        wrapper
          .find("ControlLabel")
          .at(1)
          .props().children,
      ).toEqual("Prompt:");
    });

    it("renders the answer section", () => {
      expect(
        wrapper
          .find("ControlLabel")
          .at(2)
          .props().children,
      ).toEqual("Answer:");
    });

    describe("and updating the card props", () => {
      beforeEach(() => {
        wrapper
          .find("FormControl")
          .at(1)
          .simulate("change", { target: { value: changePrompt } });
      });

      it("updates the prompt in the state", () => {
        console.log(wrapper.state().cards[0].prompt).toEqual(changePrompt);
      });
    });

    describe("and updating the card answer", () => {
      beforeEach(() => {
        wrapper
          .find("FormControl")
          .at(2)
          .simulate("change", { target: { value: changeAnswer } });
      });

      it("update the answer in the state", () => {
        expect(wrapper.state().cards[0].answer).toEqual(changeAnswer);
      });
    });
  });
});
