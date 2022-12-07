import TestRenderer from "react-test-renderer";
import Button from "../Button/Button";

describe("Given a Button component", () => {
  describe("When it's rendered in the screen", () => {
    test("Then it should show the Button component", () => {
      const digitTest: number = 5;
      const handleChangeTest = jest.fn(jest.fn());

      const expectedButtonComponent = TestRenderer.create(
        <Button handleChange={handleChangeTest} digit={digitTest} />
      );

      expect(expectedButtonComponent).toMatchSnapshot();
    });
  });
});
