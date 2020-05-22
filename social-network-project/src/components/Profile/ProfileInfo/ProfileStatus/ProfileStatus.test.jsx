import React from "react";
import ProfileStatus from "./ProfileStatus";
import { create, act } from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!" />);
        const instance = component.getInstance();
        expect(instance.state.text).toBe("");
    });
});
describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status="OK!!!" />);
        });
        const instance = component.root;
        expect(instance.state.text).toBe("PROCEED TO CHECKOUT");
    });
});