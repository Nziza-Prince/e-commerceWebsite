const express = require("express");
const router = express.Router();
const pool = require('../database/databaseConn');

// Fetch all cart items
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
  const { product_id, size, quantity, customerid } = req.body;

  try {
    // Check if the item already exists for the customer and product
    const existingItem = await pool.query(
      'SELECT * FROM carts WHERE product_id = $1 AND customerid = $2 AND size = $3;',
      [product_id, customerid, size]
    );

    if (existingItem.rows.length > 0) {
      // Update quantity if item exists
      const updatedQuantity = existingItem.rows[0].quantity + quantity;
      const updatedItem = await pool.query(
        'UPDATE carts SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE cart_id = $2 RETURNING *;',
        [updatedQuantity, existingItem.rows[0].cart_id]
      );
      res.json({ message: 'Cart item updated', cartItem: updatedItem.rows[0] });
    } else {
      // Add new item to cart
      const newItem = await pool.query(
        'INSERT INTO carts (product_id, size, quantity, customerid) VALUES ($1, $2, $3, $4) RETURNING *;',
        [product_id, size, quantity, customerid]
      );
      res.json({ message: 'Cart item added', cartItem: newItem.rows[0] });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Update the quantity of an item
router.put('/:cart_id', async (req, res) => {
  const { cart_id } = req.params;
  const { quantity } = req.body;

  try {
    const updatedItem = await pool.query(
      'UPDATE carts SET quantity = $1, updated_at = CURRENT_TIMESTAMP WHERE cart_id = $2 RETURNING *;',
      [quantity, cart_id]
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
router.delete('/:cart_id', async (req, res) => {
  const { cart_id } = req.params;

  try {
    const deletedItem = await pool.query(
      'DELETE FROM carts WHERE cart_id = $1 RETURNING *;',
      [cart_id]
    );

    if (deletedItem.rows.length > 0) {
      res.json({ message: 'Cart item removed', cartItem: deletedItem.rows[0] });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

module.exports = router;
