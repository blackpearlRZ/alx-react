import React from 'react';
import { mount, shallow, unmount } from 'enzyme';
import { WithLogging } from './WithLogging';
import Login from '../Login/Login';
import { StyleSheetTestUtils } from 'aphrodite';


StyleSheetTestUtils.suppressStyleInjection();

describe('WithLogging', () => {
    it('console.log when element is pure html', () => {
        const spy = jest.spyOn(console, 'log');
        const NewComponent = WithLogging(() => <p />);
        const wrapper = mount(< NewComponent />);
        expect(spy).toHaveBeenCalledWith('Component Component is mounted');
        wrapper.unmount();
        expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
        spy.mockRestore();
    });

    it('console.log when element is Login', () => {
        const spy = jest.spyOn(console, 'log');
        const NewComponent = WithLogging(Login);
        const wrapper = mount(< NewComponent />);
        expect(spy).toHaveBeenCalledWith('Component Login is mounted');
        wrapper.unmount();
        expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
        spy.mockRestore();
    });
});