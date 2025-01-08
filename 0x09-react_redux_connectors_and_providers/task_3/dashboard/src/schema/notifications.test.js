import React from 'react';
import { getAllNotificationsByUser, normalizedData } from './notifications';

describe('test with an id', () => {
    it('fetches the right objects', () => {
        const expectedArray = [
            {
                "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
                "isRead": true,
                "type": "urgent",
                "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            },
            {
                "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
                "isRead": false,
                "type": "urgent",
                "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
            }];
        const contextList = getAllNotificationsByUser("5debd764a7c57c7839d722e9");
        expect(contextList).toEqual(expect.arrayContaining(expectedArray));
    });
});

describe('testing normalized data', () => {
    it('testing the normalized results', () => {
        const resultEntity = normalizedData.result;
        const expectedResultArray = [
            "5debd76480edafc8af244228",
            "5debd764507712e7a1307303",
            "5debd76444dd4dafea89d53b",
            "5debd76485ee4dfd1284f97b",
            "5debd7644e561e022d66e61a",
            "5debd7644aaed86c97bf9d5e",
            "5debd76413f0d5e5429c28a0",
            "5debd7642e815cd350407777",
            "5debd764c1127bc5a490a4d0",
            "5debd7646ef31e0861ec1cab",
            "5debd764a4f11eabef05a81d",
            "5debd764af0fdd1fc815ad9b",
            "5debd76468cb5b277fd125f4",
            "5debd764de9fa684468cdc0b"
        ]
        expect(resultEntity).toEqual(expect.arrayContaining(expectedResultArray));
    });

    it('testing users entity with id', () => {
        const id = "5debd764a7c57c7839d722e9";
        const user = normalizedData.entities.users[id];
        expect(user).toEqual(
            {
                id: '5debd764a7c57c7839d722e9',
                name: { first: 'Poole', last: 'Sanders' },
                email: 'poole.sanders@holberton.nz',
                picture: 'http://placehold.it/32x32',
                age: 25
            }
        );
    });

    it('testing messages entity with guid', () => {
        const guid = "efb6c485-00f7-4fdf-97cc-5e12d14d6c41";
        const message = normalizedData.entities.messages[guid];
        expect(message).toEqual(
            {
                guid: 'efb6c485-00f7-4fdf-97cc-5e12d14d6c41',
                isRead: false,
                type: 'default',
                value: 'Cursus risus at ultrices mi.'
            }
        );
    });

    it('testing notifications entity with id', () => {
        const id = "5debd7642e815cd350407777";
        const notification = normalizedData.entities.notifications[id];
        expect(notification).toEqual(
            {
                id: '5debd7642e815cd350407777',
                author: '5debd764f8452ef92346c772',
                context: '3068c575-d619-40af-bf12-dece1ee18dd3'
            }
        );
    });
});