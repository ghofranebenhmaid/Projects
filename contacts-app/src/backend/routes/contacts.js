const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

const db = require('../database');

router.get('/', (req, res) => {
   const sql = 'SELECT * FROM contacts';
   db.query(sql, (error, results) => {
      if (error) {
         console.log('Error in the query', error);
      } else {
         console.log('Successful query');
         res.send(results);
      }
   });
});
// ? Get contact by id
router.get('/:id', (req, res) => {
   const contactId = req.params.id;
   db.query(
      'select * from contacts where id = ?',
      contactId,
      (err, results, fields) => {
         if (err) {
            console.error(err);
         } else if (results.length < 1) {
            res.send('There is no such an id');
         } else {
            res.send(results);
         }
      }
   );
});

// ? Post new contact
router.post('/add-contact', (req, res) => {
   const contact = req.body;
   console.log(contact);
   db.query('insert into contacts set ?', contact, (err, result, query) => {
      if (err) {
         console.error('this is the error', err);
      } else {
         res.send('Contact added');
      }
   });
});

// ? Update contact by id
router.put('/:id', (req, res) => {
   const id = req.params.id;
   db.query(
      'update contacts set name = ?, companyName = ?, phoneNumber = ? where id = ?;',
      [req.body.name, req.body.companyName, req.body.phoneNumber, id],
      (err, result, query) => {
         if (err) {
            console.error(err);
         } else {
            res.send('Contact has been updated.');
         }
      }
   );
});

// ? Delete contacts by id
router.delete('/:id', (req, res) => {
   const contactId = req.params.id;
   db.query(
      'delete from contacts where id = ?;',
      contactId,
      (err, results, query) => {
         if (err) {
            console.error(err);
         } else {
            res.send('Contact has been deleted.');
         }
      }
   );
});

module.exports = router;
