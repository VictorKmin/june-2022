const { CronJob } = require('cron');
const dayjs = require('dayjs');
const OAuth = require("../dataBase/OAuth");

const utc = require('dayjs/plugin/utc');

dayjs.extend(utc);

module.exports = new CronJob(
    '* * 1 * * *',
    async function() {
      try {
        console.log('Start removing tokens')
        const monthAgo = dayjs().utc().subtract(1, 'month');

        await OAuth.deleteMany({ createdAt: { $lte: monthAgo }});
        console.log('End removing tokens')
      } catch (e) {
        console.error(e);
      }
    },
);
