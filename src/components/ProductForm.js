// src/components/ProductForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../store/productsSlice';

const ProductForm = ({ product, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(updateProduct({ id: product.id, name, description }));
    } else {
      const newProduct = {
        id: Date.now().toString(),
        name,
        description,
      };
      dispatch(addProduct(newProduct));
    }
    onClose(); // Close the form after submission
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">{product ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="py-1 px-3 bg-gray-500 text-white rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-1 px-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {product ? 'Update' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
