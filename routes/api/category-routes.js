const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  Category.findAll()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
    .then(newData => res.json(newData))
    .catch(err => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.status(200).json({
        data: data,
        message: 'Category updated'
      });
    })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(data => {
      res.json({
        data: data,
        message: 'Category deleted'
      })
    })
    .catch(err => res.status(400).json(err))
});

module.exports = router;
