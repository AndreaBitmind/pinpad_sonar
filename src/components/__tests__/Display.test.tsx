import TestRenderer from "react-test-renderer";
import Display from "../Display/Display";

describe("Given a Display component", () => {
  describe("When it's rendered in the screen", () => {
    test("Then it should show the Display component", () => {
      const resultTest = ["*", "*", "*", "5"];

      const expectedDisplayComponent = TestRenderer.create(
        <Display result={resultTest} />
      );

      expect(expectedDisplayComponent).toMatchSnapshot();
    });
  });
});
