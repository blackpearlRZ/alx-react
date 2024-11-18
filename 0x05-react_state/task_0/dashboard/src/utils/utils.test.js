import React from 'react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


describe('getFullYear', () => {
    it('returns the current year', () => {
        const currentYear = new Date().getFullYear()
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    it('returns str when arg is true', () => {
        const isIndex = true;
        expect(getFooterCopy(isIndex)).toBe("Holberton School");
    });
    it('returns str when arg is false', () => {
        const isIndex = false;
        expect(getFooterCopy(isIndex)).toBe("Holberton School main dashboard");
    });
});

describe('getLatestNotification', () => {
    it('returns the correct notification string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
    })
})