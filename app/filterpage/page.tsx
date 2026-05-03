"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import PathComponent from "@/components/PathComponent";
import ProductCard from "@/components/productCard/ProductCard";

interface ApiProduct {
    _id: number;
    title: string;
    price: number;
    oldPrice?: string;
    image: string;
    rating: number;
    type: string;
}

import { Suspense } from "react";
import Pagination from "@/components/Pagination";
import Filter from "@/components/Filter";

function FilterContent() {
    const searchParams = useSearchParams();
    const style = searchParams.get("style") || "Casual";

    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const itemsPerPage = 9;

    useEffect(() => {
        // ... (fetch logic remains the same)
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapiserver.reactbd.org/api/products");
                const json = await response.json();
                const productList = json.data || [];

                const mappedProducts = productList.map((item: ApiProduct) => {
                    const originalPrice = item.oldPrice ? parseFloat(item.oldPrice) : undefined;
                    let discountPercentage;
                    if (originalPrice && originalPrice > item.price) {
                        discountPercentage = Math.round(((originalPrice - item.price) / originalPrice) * 100);
                    }

                    return {
                        id: item._id,
                        name: item.title,
                        price: item.price,
                        originalPrice: originalPrice,
                        discountPercentage: discountPercentage,
                        image: item.image,
                        rating: item.rating,
                    };
                });

                setProducts(mappedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
        setCurrentPage(1);
    }, [style]);

    const pathItems = [
        { label: "Home", href: "/" },
        { label: style },
    ];

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="flex flex-col w-full pb-20">
            <PathComponent items={pathItems} />

            <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 mt-6 md:mt-10">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Desktop Sidebar */}
                    <div className="hidden md:block w-[295px] flex-shrink-0">
                        <Filter />
                    </div>

                    {/* Mobile Filter Drawer Overlay */}
                    {isDrawerOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-[100] md:hidden transition-opacity duration-300"
                            onClick={() => setIsDrawerOpen(false)}
                        />
                    )}

                    {/* Mobile Filter Drawer */}
                    <div className={`fixed bottom-0 left-0 right-0 z-[101] md:hidden bg-white rounded-t-[20px] transition-transform duration-300 transform ${isDrawerOpen ? "translate-y-0" : "translate-y-full"} max-h-[90vh] overflow-y-auto`}>
                        <div className="p-4 flex justify-end sticky top-0 bg-white z-10 border-b border-black/5">
                            <button onClick={() => setIsDrawerOpen(false)} className="p-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <Filter />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div className="flex items-center justify-between w-full md:w-auto">
                                <h1 className="text-[24px] md:text-[32px] font-bold text-black">{style}</h1>
                                {/* Mobile Filter Button */}
                                <button
                                    onClick={() => setIsDrawerOpen(true)}
                                    className="md:hidden w-8 h-8 flex items-center justify-center bg-[#F0F0F0] rounded-full"
                                >
                                    <Image 
                                      src="/FilterLogo.png" 
                                      alt="Filter" 
                                      width={16} 
                                      height={16} 
                                    />
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-black/60 text-[14px] md:text-[16px]">
                                    Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, products.length)} of {products.length} Products
                                </span>
                                <div className="hidden md:flex items-center gap-2 cursor-pointer group">
                                    <span className="text-black/60">Sort by:</span>
                                    <span className="font-medium text-black flex items-center gap-1 group-hover:text-black/70 transition-colors">
                                        Most Popular
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center py-20">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-black"></div>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                                    {currentProducts.map((product) => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={(page) => {
                                            setCurrentPage(page);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                    />
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FilterPage() {
    return (
        <Suspense fallback={<div className="p-20 text-center">Loading page...</div>}>
            <FilterContent />
        </Suspense>
    );
}
