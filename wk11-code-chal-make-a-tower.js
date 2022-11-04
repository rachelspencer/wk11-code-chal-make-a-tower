// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.
// For example, a tower of 3 floors looks like this (note the spacing):
// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]

// const buildATower = (numFloors) => {
//     const tower = []
//     const maxAsteriskCount = numFloors * 2 - 1 

//     for (let i = 1; i <= numFloors; i++) {
//         const whiteSpaceCount = numFloors - i;
//         const asteriskCount = maxAsteriskCount - (whiteSpaceCount * 2);
//         const blockBuilder = (num, char) => {
//             const block = [];
//             for (let i = 0; i < num; i++) {
//                 block.push(char);
//             }
//             return block.join('');
//         }
//         const whiteSpaceLeft = blockBuilder(whiteSpaceCount, ' ')
//         const asterisks = blockBuilder(asteriskCount, '*')
//         const whiteSpaceRight = blockBuilder(whiteSpaceCount, ' ')
        
//         tower.push(whiteSpaceLeft + asterisks + whiteSpaceRight);
//     }
//     return tower;
// };

const buildATower = (numFloors) => {
    const tower = []
    const maxAsteriskCount = numFloors * 2 - 1 

    for (let i = 1; i <= numFloors; i++) {
        const whiteSpaceCount = numFloors - i;
        const asteriskCount = maxAsteriskCount - (whiteSpaceCount * 2);
        const whitespaceBlock = ' '.repeat(whiteSpaceCount);
        const asteriskBlock = '*'.repeat(asteriskCount);
        tower.push(whitespaceBlock + asteriskBlock + whitespaceBlock);
    }
    return tower;
};

console.log(buildATower(12));