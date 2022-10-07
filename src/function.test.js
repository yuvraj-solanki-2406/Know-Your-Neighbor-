import timesTwo from "./function"
import Star from "./function"
import {render} from "@testing-library/react"

// test("multplies by two", () => {
//     expect(timesTwo(4))
//     .toBe(8);
// });

test("" , () => {
    const {getByText} = render(<Star />);
    const textText = getByText(/Cool Text/);
    expect(textText).toHaveTextContent("Cool Text");

});