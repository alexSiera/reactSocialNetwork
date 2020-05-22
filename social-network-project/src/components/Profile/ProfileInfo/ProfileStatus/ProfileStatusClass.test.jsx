import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("OK!!!");
    });
});

describe("after creation span should be displayed with correct status", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!"/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.props.children[1]).toBe("OK!!!");
    });
});

describe("after creation input should't be displayed", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!"/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType('input')
        }).toThrow();
    });
});
describe("input should be show after turning on editMode in status and", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!"/>);
        const root = component.root;
        const instance = component.getInstance();
        const span = root.findByType('span');
        span.props.onDoubleClick();
        const input = root.findByType('input');
        expect(input.props.value).toBe(instance.state.status);
        expect(() => {
            const span = root.findByType('span')
        }).toThrow();
        expect(instance.state.editMode).toBe(true);

    });
});
describe("callback should be called", () => {
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="OK!!!" updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
describe("Button component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="OK!!!"/>);
        const root = component.root;
        const span = root.findByType('span');
        expect(span.innerText).toBe('OK!!!');
    });
});
