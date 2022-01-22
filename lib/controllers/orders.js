const { Router } = require('express');
const Order = require('../models/Order');

module.exports = Router()
  .post('/', async (req, res) => {
    const order = await Order.insert(req.body);
    res.json(order);
  })

  .get('/:id', async (req, res) => {
    const order = await Order.getById(req.params.id);
    res.json(order);
  })

  .get('/', async (req, res) => {
    const orders = await Order.getAll();
    res.json(orders);
  })

  .patch('/:id', async (req, res) => {
    const order = await Order.updateById(req.params.id, req.body);
    res.json(order);
  })

  .delete('/:id', async (req, res) => {
    const order = await Order.deleteById(req.params.id);
    res.json(order);
  });
