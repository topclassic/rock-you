import generateActionType from "../generateActionType";

describe("GenerateActionType", () => {
  it("test func generateActionType correctly", () => {
    expect(generateActionType("GET_CALCULATION")).toEqual({
      FAILURE: "GET_CALCULATION_FAILURE",
      REQUEST: "GET_CALCULATION_REQUEST",
      SUCCESS: "GET_CALCULATION_SUCCESS"
    });
  });
});