const db = require('./db');
module.exports = {
  getStudentByRoll: (roll, callback) => {
    db.query("SELECT * FROM students WHERE rollNumber = ?", [roll], callback);
  }
};