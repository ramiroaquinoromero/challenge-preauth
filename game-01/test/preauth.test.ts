import 'jest';
import {getSumResultArray} from '../preauth';

describe('Preauth Test', () => {
    it('Test normal cases', () => {
        const data = [
            {
                values:[1,2,3,4],
                sum:5,
                result: [1,4]
            },
            {
                values:[1,2,3,4],
                sum:3,
                result: [1,2]
            },
            {
                values:[1,2,3,4],
                sum:6,
                result: [2,4]
            }
        ];
    
        data.forEach (sumData => {
            expect(getSumResultArray(sumData.values,sumData.sum)).toBe(sumData.result)
        });
    });

    it('Test especial cases', () => {
        const data = [
            {
                values:[1,2,3,4],
                sum:1,
                result: [1]
            },
            {
                values:[1,2,3,4],
                sum:8,
                result: []
            },
            {
                values:[1,2,3,14],
                sum:14,
                result: [14]
            }
        ];
    
        data.forEach (sumData => {
            expect(getSumResultArray(sumData.values,sumData.sum)).toBe(sumData.result)
        });
    }); 
});
