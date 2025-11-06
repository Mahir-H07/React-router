



import React from 'react';
import { useLoaderData } from 'react-router';

const Products = () => {

       const data = useLoaderData();

    console.log(data);

    return (
        <div>
              <ul>
                {
                    data.map((doc) => <li>{doc.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Products;