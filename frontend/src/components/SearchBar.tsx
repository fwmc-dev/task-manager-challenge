'use client';

import React, { useState, FormEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void; 
    placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder = 'Buscar tareas...' }: SearchBarProps) {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex items-center gap-2">
            <div className="relative grow">
                <input
                    type="text"
                    id="search"
                    autoComplete='off'
                    className="block w-full rounded-lg border p-2.5 pl-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 outline-0"
                    placeholder={placeholder}
                    value={query}
                    onChange={handleChange}
                />
                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
                        title="Limpiar búsqueda"
                    >
                        x
                    </button>
                )}
            </div>
            <button
                type="submit"
                className="hover:cursor-pointer rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
                Buscar
            </button>
        </form>
    );
};