import { shallow } from "enzyme";
import React from "react";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe("<BodySectionWithMarginBottom />", () => {
    it('properly renders BodySection with correct props', () => {
        const wrapper = shallow(<BodySectionWithMarginBottom title="test title" ><p>test children node</p></BodySectionWithMarginBottom>);
        expect(wrapper.find(BodySection).exists()).toBe(true);
        expect(wrapper.find(BodySection).prop('title')).toBe('test title');
        expect(wrapper.find(BodySection).children().text()).toBe('test children node');
    });
});