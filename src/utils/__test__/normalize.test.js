import { normalizeDigit } from "../normalize";
import snapshotTest from "../../snapshotTest";

describe("NormalizeDigit", () => {
  it("test func normalizeDigit correctly", () => {
    expect(normalizeDigit("100")).toEqual("100");
  });
  it("test func normalizeDigit not correctly", () => {
    expect(normalizeDigit("")).toEqual("");
    expect(normalizeDigit("A")).toEqual("");
  });

});

describe("NormalizeDigit testing", () => {
  snapshotTest("func normalizeDigit(100)", normalizeDigit("100"));
  snapshotTest("func normalizeDigit('')", normalizeDigit(""));
  snapshotTest("func normalizeDigit(A)", normalizeDigit(""));
});
