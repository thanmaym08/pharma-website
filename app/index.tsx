"use client"; // Mark this component as a client component

import React from 'react';
import './globals.css'; // Import global styles

// Define types for categories and items
type Category = string;

interface Item {
    id: number;
    name: string;
    category: Category;
}

const categories: Category[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const items: Item[] = [
    { id: 1, name: 'Item 1', category: 'Category 1' },
    { id: 2, name: 'Item 2', category: 'Category 1' },
    { id: 3, name: 'Item 3', category: 'Category 2' },
    { id: 4, name: 'Item 4', category: 'Category 3' },
];

const IndexPage: React.FC = () => {
    return (
        <div className="flex">
            {/* Categories Sidebar */}
            <aside className="w-1/4 bg-gray-200 p-4">
                <h2 className="text-lg font-bold mb-4">Categories</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category} className="mb-2">
                            <a href={`#${category}`} className="text-blue-600 hover:underline">{category}</a>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Items Container */}
            <div className="w-3/4 p-4">
                <h2 className="text-lg font-bold mb-4">Items</h2>
                <div className="grid grid-cols-2 gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="border rounded p-4">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.category}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndexPage;
