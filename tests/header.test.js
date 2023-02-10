import { h } from "preact";
import Header from "../src/components/header";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";
import { render, fireEvent, screen, waitFor } from "@testing-library/preact";

describe("Test of the Header", () => {
  test("Header renders 3 nav items", () => {
    const context = shallow(<Header />);
    expect(context.find("span").text()).toBe("INDITEX");
  });
});
