import {describe,it,expect,vi} from 'vitest';
import ToggleButton from './ToggleButton';
import { render, screen, fireEvent } from "@testing-library/react";

describe("ToggleButton Component", () => {
    it("renders the ToggleButton correctly", () => {
     render(<ToggleButton  Active={false} disabled={false}/>);
      const button = screen.getByRole("button");
      expect(button).toBeInTheDocument() // Initially should NOT be active


});

    it("renders active the toggle button", () => {
        render(<ToggleButton  Active={false} />);
        const button = screen.getByRole("button");


      fireEvent.click(button); // Simulate click event

      expect(button).toHaveClass("active");

})
it("renders disable the toggle button",()=>{
    render(<ToggleButton Active={false} disabled={true} />)
    const button=screen.getByRole("button")

    expect(button).toHaveClass("disabled")
    expect(button).toBeDisabled();
})
})