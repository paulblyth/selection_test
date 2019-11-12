import { renderHook } from "@testing-library/react-hooks";

import { useItems } from "./useItems";

describe("useItems", () => {
  it("should return an initial item list of 3 items", () => {
    const { result } = renderHook(() => useItems());

    expect(result.current.items).toHaveLength(3);
  });
});
