import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  describe("initialize with defaultCount=0 and descrption='My Counter'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={0} description="My Counter" />);
    });

    it("renders 'Current count to 0'", () => {
      expect(screen.getByText("My Counter: 0")).toBeInTheDocument();
    });

    it("renders title as 'MyCounter'", () => {
      expect(screen.getByText(/My Counter/i)).toBeInTheDocument();
    });

    describe("when 'increment' is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", {
            name: /increment the counter by 1/i,
          })
        );
      });

      it("renders currentCount to 1", () => {
        expect(screen.getByText("My Counter: 1")).toBeInTheDocument();
      });
    });
    describe("when 'decrement' is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
          screen.getByRole("button", {
            name: /decrement the counter by 1/i,
          })
        );
      });

      it("renders currentCount to -1", () => {
        expect(screen.getByText("My Counter: -1")).toBeInTheDocument();
      });
    });
  });
});
