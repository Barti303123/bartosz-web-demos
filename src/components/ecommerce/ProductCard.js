"use client";

import { useCart } from '@/store/useCart';
import { priceLabel } from '@/lib/shopProducts';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
    const addItem = useCart((state) => state.addItem);

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all group flex flex-col h-full">
            <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                {product.imageUrl ? (
                    <img 
                        src={product.imageUrl} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">Brak zdjęcia</div>
                )}
            </div>
            <div className="p-5 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-2 mb-2">
                    <h3 className="font-bold text-gray-900 line-clamp-2">{product.name}</h3>
                    <span className="font-bold text-blue-600 whitespace-nowrap">{priceLabel(product.price)}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2 flex-1">{product.description}</p>
                <button 
                    onClick={() => addItem(product)}
                    className="w-full mt-auto flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white py-2.5 rounded-xl font-medium transition-colors"
                >
                    <ShoppingCart className="w-4 h-4" />
                    Do koszyka
                </button>
            </div>
        </div>
    );
}
