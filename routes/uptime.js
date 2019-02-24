module.exports = function (app) {
  /**
 * Retrieves the uptime of the NodeJS process in seconds
 */
  app.get('/v1/uptime', (_, res) => {
    res
      .json(process.uptime());
  });
};
