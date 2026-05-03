"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const pages = [];

    if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
        pages.push(1, 2, 3, "...", totalPages - 2, totalPages - 1, totalPages);
    }

    return (
        <div className="w-full flex items-center justify-between border-t border-black/10 pt-5 mt-8 md:mt-12 font-satoshi">
            {/* Previous Button */}
            <button
                onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-[8px] text-[14px] font-medium hover:bg-black/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 12L6 8L10 4" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {pages.map((page, index) => (
                    <button
                        key={index}
                        onClick={() => typeof page === "number" && onPageChange(page)}
                        disabled={page === "..."}
                        className={`w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-[8px] text-[14px] font-medium transition-all ${currentPage === page
                            ? "bg-[#F0F0F0] text-black"
                            : "text-black/50 hover:bg-black/5"
                            } ${page === "..." ? "cursor-default" : ""}`}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next Button */}
            <button
                onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="flex items-center gap-2 px-4 py-2 border border-black/10 rounded-[8px] text-[14px] font-medium hover:bg-black/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </div>
    );
}
