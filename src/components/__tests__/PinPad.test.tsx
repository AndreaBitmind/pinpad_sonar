import TestRenderer from "react-test-renderer";
import PinPad from "../PinPad/PinPad";

describe("Given a PinPad component", () => {
  describe("When it's rendered in the screen", () => {
    test("Then it should show the PinPad component", () => {
      const expectedPinPadComponent = TestRenderer.create(<PinPad />);

      expect(expectedPinPadComponent).toMatchSnapshot();
    });
  });
});
