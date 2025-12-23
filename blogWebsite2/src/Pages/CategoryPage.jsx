import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import Header from '../components/Header';
const CategoryPage = () => {
    const location = useLocation();
    const navigation = useNavigate();
    const category = location.pathname.split('/').at(-1);
    return (
        <div className="pt-20">
            <Header />
            <div className="w-11/12 max-w-4xl mx-auto space-y-6">
                <div className="pt-2 flex items-center gap-3">
                    <button
                        onClick={() => navigation(-1)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50 dark:border-blue-300 dark:text-blue-200 dark:hover:bg-blue-900/30 transition cursor-pointer"
                    >
                        ← Back
                    </button>
                    <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-200">
                        Blogs on <span className="font-bold">{category}</span>
                    </h2>
                </div>
            </div>
            <Blogs />
            <Pagination />
        </div>
    )
}

export default CategoryPage