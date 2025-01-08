import { shallow } from 'enzyme';
import React from 'react';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySection />', () => {
    it('renders the correct children and h2 element', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.find('h2').length).toBe(1);
        expect(wrapper.find('h2').text()).toBe('test title');
        expect(wrapper.find('p').length).toBe(1);
        expect(wrapper.find('p').text()).toBe('test children node');
    });
});