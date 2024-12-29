const express = require("express")
const router = express.Router()
const pool = require('../database/databaseConn')

router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM carts;');
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch cart items' });
    }
  });
  
  // Add a new item to the cart
router.post('/', async (req, res) => {
    const { name, price, quantity, size, image } = req.body;
  
    try {
      // Check if the item already exists
      const existingItem = await pool.query('SELECT * FROM carts WHERE name = $1;', [name]);
  
      if (existingItem.rows.length > 0) {
        // Update quantity if item exists
        const updatedQuantity = existingItem.rows[0].quantity + quantity;
        const updatedItem = await pool.query(
          'UPDATE cart SET quantity = $1 WHERE name = $2 RETURNING *;',
          [updatedQuantity, name]
        );
        res.json({ message: 'Cart item updated', cartItem: updatedItem.rows[0] });
      } else {
        // Add new item to cart
        const newItem = await pool.query(
          'INSERT INTO cart (name, price, quantity, size, image) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
          [name, price, quantity, size, image]
        );
        res.json({ message: 'Cart item added', cartItem: newItem.rows[0] });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  });
  
  // Update the quantity of an item
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
  
    try {
      const updatedItem = await pool.query(
        'UPDATE cart SET quantity = $1 WHERE id = $2 RETURNING *;',
        [quantity, id]
      );
  
      if (updatedItem.rows.length > 0) {
        res.json({ message: 'Cart item updated', cartItem: updatedItem.rows[0] });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to update cart item' });
    }
  });
  
  // Remove an item from the cart
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedItem = await pool.query('DELETE FROM cart WHERE id = $1 RETURNING *;', [id]);
  
      if (deletedItem.rows.length > 0) {
        res.json({ message: 'Cart item removed', cartItem: deletedItem.rows[0] });
      } else {
        res.status(404).json({ error: 'Item not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to remove item from cart' });
    }
  });

  module.exports = router 