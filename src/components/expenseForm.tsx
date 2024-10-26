import React from 'react';
import { ExpenseFormData } from '../types';

const categories = [
    'Food', 'Transportation', 'Housing', 'Utilities',
    'Entertainment', 'Healthcare', 'Shopping', 'Other'
];

interface ExpenseFormProps {
    onSubmit: (expense: ExpenseFormData) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = React.useState<ExpenseFormData>({
        amount: 0,
        category: '',
        date: new Date().toISOString().split('T')[0],
        description: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            amount: 0,
            category: '',
            date: new Date().toISOString().split('T')[0],
            description: ''
        });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Expense</h2>
            <div className="grid grid-cols-1 gap-4">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Amount</label>
                    <input
                        type="number"
                        required
                        min="0"
                        step="0.01"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: parseFloat(e.target.value) })}
                        className="mt-1 block w-full h-[3.5rem] border-gray-500 border-b focus:border-indigo-500 focus:ring-indigo-500 outline-none text-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Category</label>
                    <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="mt-1 block w-full h-[3.5rem] border-gray-500 border-b focus:border-indigo-500 focus:ring-indigo-500 text-lg outline-none"
                    >
                        <option value="">Select a category</option>
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Date</label>
                    <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min= {new Date().toISOString().split('T')[0]}
                        className="mt-1 block w-full h-[3.5rem] border-gray-500 border-b focus:border-indigo-500 focus:ring-indigo-500 outline-none text-lg"
                    />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="mt-1 block w-full h-[3.5rem] border-gray-500 border-b focus:border-indigo-500 focus:ring-indigo-500 outline-none text-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
                >
                    Add Expense
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm