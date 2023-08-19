const cron = require("node-cron");
const { checkKeys } = require("./check-keys");

module.exports = {
  schedule: () => {
    checkKeys();
    cron.schedule("0 10 */1 * *", checkKeys); // every day at 10:00
  },
};
