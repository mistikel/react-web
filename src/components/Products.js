// src/components/Products.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, deleteProduct } from '../store/productsSlice';
import ProductForm from './ProductForm';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const [showAddForm, setShowAddForm] = useState(false); // State for toggling add form
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowAddForm(true);
  };

  const handleCloseForm = () => {
    setShowAddForm(false);
    setEditingProduct(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Button to toggle Add Product form */}
      <button
        onClick={() => setShowAddForm(!showAddForm)}
        className="mb-4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        {showAddForm ? 'Close Form' : 'Add Product'}
      </button>

      {/* Show Product Form only if toggled */}
      {showAddForm && (
        <ProductForm
          product={editingProduct}
          onClose={handleCloseForm} // Close form after adding or updating product
        />
      )}

      {/* Products List */}
      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="flex justify-between items-center p-4 bg-white shadow-md rounded-md">
            <div>
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p>{product.description}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(product)}
                className="py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(product.id)}
                className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
