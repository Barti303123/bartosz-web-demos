"use client";

import { useCart } from '@/store/useCart';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CartIcon() {
    const getCartCount = useCart((state) => state.getCartCount);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Link href="/koszyk" className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {mounted && getCartCount() > 0 && (
                <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white shadow-sm ring-2 ring-white">
                    {getCartCount()}
                </span>
            )}
        </Link>
    );
}
