var AppDispatcher = require('../dispatcher/app-dispatcher');

module.exports = {

  createComment: function(comment) {
    var action = {
      actionType: "CREATE_COMMENT",
      comment: comment
    };

    AppDispatcher.dispatch(action);
  }
};
