const { CronJob } = require('cron');
const dayjs = require('dayjs');
const OldPassword = require("../dataBase/OldPassword");

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

module.exports = new CronJob(
    '0,20,40 * * * * *',
    async function() {
      try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(a => a.json());
        console.log(users)

        console.log('Start removing passwords')
        const yearAgo = dayjs().utc().subtract(1, 'year');

        await OldPassword.deleteMany({ createdAt: { $lte: yearAgo }});
        console.log('End removing passwords')
      } catch (e) {
        console.error(e);
      }
    },
);
