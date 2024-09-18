import React, { useState } from 'react';

const Claims = () => {
  // Initial dummy data for claims
  const initialClaims = [
    { id: '1', productId: '1', description: 'Claim for Product 1', status: 'Pending' },
    { id: '2', productId: '2', description: 'Claim for Product 2', status: 'Pending' },
  ];

  const [claims, setClaims] = useState(initialClaims);

  // Function to approve a claim
  const approveClaim = (id) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === id ? { ...claim, status: 'Approved' } : claim
      )
    );
  };

  // Function to reject a claim
  const rejectClaim = (id) => {
    setClaims((prevClaims) =>
      prevClaims.map((claim) =>
        claim.id === id ? { ...claim, status: 'Rejected' } : claim
      )
    );
  };

  return (
    <div>
      <h1>Warranty Claims</h1>
      <ul>
        {claims.map((claim) => (
          <li key={claim.id}>
            <p>Product ID: {claim.productId}</p>
            <p>Description: {claim.description}</p>
            <p>Status: {claim.status}</p>
            {claim.status === 'Pending' && (
              <div>
                <button 
                  onClick={() => approveClaim(claim.id)}
                  className="mb-4 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                >Approve</button>
                <button 
                onClick={() => rejectClaim(claim.id)}
                className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                >Reject</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Claims;
