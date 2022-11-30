const fs = require('fs/promises');
const path = require('path');

const pathToFile = path.join(process.cwd(), 'dataBase', 'users.json');

module.exports = {
  reader: async () => {
    const buffer = await fs.readFile(pathToFile);
    console.log(JSON.stringify({age: null, name: "max"}))
    return JSON.parse(buffer.toString());
  },

  writer: async (users) => {
    await fs.writeFile(pathToFile, JSON.stringify(users));
  },
};
