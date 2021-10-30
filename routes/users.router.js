const express = require('express');
const faker = require('faker');

const router = express.Router();

// READ users
router.get('/', (req, res) => {
  const users = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users)
});

router.get('/:id', (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    image: faker.image.imageUrl(),
  });
});

// CREATE
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Created',
    data: body
  });
});

// UPDATE
router.patch('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'Update',
    data: body,
    id,
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    message: 'Deleted',
    id,
  });
});

module.exports = router;
