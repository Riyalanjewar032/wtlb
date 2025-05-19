const express = require('express');
const router = express.Router();
const studentModel = require('../models/student');
const mseModel = require('../models/mse');
const eseModel = require('../models/ese');

router.get('/:rollNumber', (req, res) => {
  studentModel.getStudentByRoll(req.params.rollNumber, (err, students) => {
    if (err || students.length === 0) return res.status(404).json({ error: 'Student not found' });
    const student = students[0];

    mseModel.getMSEByStudentId(student.id, (err, mseMarks) => {
      eseModel.getESEByStudentId(student.id, (err, eseMarks) => {
        let result = {};
        mseMarks.forEach(m => {
          const ese = eseMarks.find(e => e.subject === m.subject);
          if (ese) {
            const final = m.marks * 0.3 + ese.marks * 0.7;
            result[m.subject] = final;
          }
        });
        res.json({ student, result });
      });
    });
  });
});

module.exports = router;