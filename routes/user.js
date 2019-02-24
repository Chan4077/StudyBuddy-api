module.exports = function (app, admin, throwJsonError) {

  /**
   * Retrieves a user's particulars
   *
   * Matches the following routes:
   * <host>/v1/user/<id>, <host>/v1/user?id=<id>
   */
  app.route(['/v1/user', '/v1/user/:userId'])
    .get((req, res) => {
      const id = req.query['id'] || req.params['userId'];
      if (id) {
        admin.auth().getUser(id)
          .then(result => {
            res.json(result.toJSON());
          })
          .catch(result => {
            return throwJsonError(result, res);
          });
      } else {
        res
          .status(400)
          .json({
            error: {
              code: 400,
              message: 'Please specify a user ID!'
            }
          });
      }
    })
    .delete((req, res) => {
      if ('id' in req.query) {
        admin.auth()
          .deleteUser(req.query['id'])
          .then(() => {
            res.status(204);
          })
          .catch(result => {
            return throwJsonError(result, res);
          });
      }
    });
};
