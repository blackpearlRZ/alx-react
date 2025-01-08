import rootReducer from "./rootReducer";
import { Map } from 'immutable';


describe('rootReducer tests', () => {
    it('tests default state', () => {
        const returnedState = rootReducer();
        expect(returnedState).toEqual(
            {
                ui: Map({
                    isNotificationDrawerVisible: false,
                    isUserLoggedIn: false,
                    user: null
                }),
                courses: Map({}),
                notifications: Map({
                    notifications: [],
                    filter: 'DEFAULT'
                })
            }
        );
    });
});