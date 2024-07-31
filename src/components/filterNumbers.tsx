import React from 'react';

function filterNumbers(numbers: number[]): number[] {
    return numbers.filter(num => num % 2 === 0);
}


const EvenNumbersList: React.FC = () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const evenNums = filterNumbers(nums);

    return (
        <div>
            <h1>Even Numbers</h1>
            <ul>
                {evenNums.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
};

export default EvenNumbersList;