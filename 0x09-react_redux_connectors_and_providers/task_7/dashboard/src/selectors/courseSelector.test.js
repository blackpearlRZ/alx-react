import { coursesNormalizer } from "../schema/courses";
import { getListCourses } from "./courseSelector";
import { Map } from 'immutable';


describe('testing courseSelector', () => {
    it('tests getListCourses function', () => {
        const initialState = Map(
            coursesNormalizer([
                {
                    "id": "1",
                    "name": "ES6",
                    "credit": 60
                },
                {
                    "id": "2",
                    "name": "Webpack",
                    "credit": 20
                },
                {
                    "id": "3",
                    "name": "React",
                    "credit": 40
                }
            ])
        );
        const courses = getListCourses(initialState);
        console.log(courses);
        expect(courses).toEqual([
            {
                "id": "1",
                "name": "ES6",
                "credit": 60
            },
            {
                "id": "2",
                "name": "Webpack",
                "credit": 20
            },
            {
                "id": "3",
                "name": "React",
                "credit": 40
            }
        ]);
    });
});