import calSmallestAmount from "../calSmallestAmount";
import snapshotTest from "../../snapshotTest";

describe("CalSmallestAmount", () => {
  it("test func calculate amount correctly", () => {
    expect(calSmallestAmount("100")).toEqual(
      "Your change is 1 100 dollar bill"
    );
    expect(calSmallestAmount(".99")).toEqual(
      "Your change is 3 quarters, 2 dimes, and 4 pennies"
    );
    expect(calSmallestAmount("124.67")).toEqual(
      "Your change is 1 100 dollar bill, 1 20 dollar bill, 4 1 dollar bills, 2 quarters, 1 dime, 1 nickel, and 2 pennies"
    );
  });
});

describe("CalSmallestAmount testing", () => {
  snapshotTest("func CalSmallestAmount(100)", calSmallestAmount("100"));
  snapshotTest("func CalSmallestAmount(.99)", calSmallestAmount(".99"));
  snapshotTest("func CalSmallestAmount(124.67)", calSmallestAmount("124.67"));
});
