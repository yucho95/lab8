/*
 * GET about page.
 */
var data = {
  tasks: ['Finish this lab']
};

exports.view = function(req, res){
  res.render('tasks', data);
};

