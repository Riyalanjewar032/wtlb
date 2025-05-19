const db = require('./db');
module.exports = {
  getMSEByStudentId: (id, callback) => {
    db.query("SELECT * FROM mse WHERE studentId = ?", [id], callback);
  }
};