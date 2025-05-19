const db = require('./db');
module.exports = {
  getESEByStudentId: (id, callback) => {
    db.query("SELECT * FROM ese WHERE studentId = ?", [id], callback);
  }
};