import { randomNumBetween } from "./randomNumBetween";

const randomSpy = jest.spyOn(Math, "random");

describe("randomNumBetween", () => {
  describe("when min=0 & max=2", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });
    it("should return 0", () => {
      expect(randomNumBetween(0, 2)).toBe(0);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.5", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });
    it("should return 1", () => {
      expect(randomNumBetween(0, 2)).toBe(1);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.9", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.9);
    });
    it("should return 1", () => {
      expect(randomNumBetween(0, 2)).toBe(2);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });
});
