import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe("Counter", () => {
  describe("initialize with defaultCount=0 , description='My Counter' and incrementor=1", () => {
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
            name: /increment the counter/i,
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
            name: /decrement the counter/i,
          })
        );
      });

      it("renders currentCount to -1", () => {
        expect(screen.getByText("My Counter: -1")).toBeInTheDocument();
      });
    });
  });

  describe("initialize with defaultCount=10 & description='My Counter'", () => {
    beforeEach(() => {
      render(<Counter defaultCount={10} description="My Counter" />);
    });

    it("renders 'Current count to 10'", () => {
      expect(screen.getByText("My Counter: 10")).toBeInTheDocument();
    });

    it("renders title as 'MyCounter'", () => {
      expect(screen.getByText(/My Counter/i)).toBeInTheDocument();
    });

    describe("when 'chosenValue' is changed to 5 and 'Increment' is clicked", () => {
      beforeEach(async () => {
        user.type(screen.getByLabelText(/Value/), "{selectall}5");
        user.click(
          screen.getByRole("button", {
            name: "Increment the counter",
          })
        );
        await screen.findByText("My Counter: 15");
      });

      it("renders currentCount to 15", () => {
        expect(screen.getByText("My Counter: 15")).toBeInTheDocument();
      });

      // eslint-disable-next-line jest/expect-expect
      it('"I am too small" disappears after 300ms', async () => {
        await waitForElementToBeRemoved(() =>
          screen.queryByText("I am too small")
        );
      });
    });

    describe("when 'chosenValue' is changed to 5 and 'Decrement' is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Value/), "{selectall}5");
        user.click(
          screen.getByRole("button", {
            name: "Decrement the counter",
          })
        );
      });

      it("renders currentCount to 5", () => {
        expect(screen.getByText("My Counter: 5")).toBeInTheDocument();
      });
    });
  });
});
