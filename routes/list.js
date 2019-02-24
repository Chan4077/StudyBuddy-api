module.exports = function (app) {
  app.get('/v1/apis', (_, res) => {
    var routes = app._router.stack          // registered routes
      .filter(r => r.route)    // take out all the middleware
      .map(r => r.route.path);  // get all the paths
    res.json(routes);
  });
};
