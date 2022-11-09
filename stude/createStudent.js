console.log('I AM BUILDER');

function studentBuilder(name, age) {
  return {
    name,
    age,
    sleep: () => {
      console.log(`No sleep. I am student 🥵`)
    }
  }
}

module.exports = {
  studentBuilder
}

// module.exports.fName = studentBuilder;
// module.exports.lesson = 1

// module.exports = {
//   creator: (name, age) => {
//     return {
//       name,
//       age,
//       sleep: () => {
//         console.log(`No sleep. I am student 🥵`)
//       }
//     }
//   },
//
//   lesson: 'FS'
// }
