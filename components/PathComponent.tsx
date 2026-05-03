import Link from "next/link";

interface PathItem {
  label: string;
  href?: string;
}

interface PathComponentProps {
  items: PathItem[];
}

export default function PathComponent({ items }: PathComponentProps) {
  return (
    <div className="w-full border-t border-black/10">
      <div className="max-w-[1440px] mx-auto w-full px-4 md:px-16 py-5">
        <nav className="flex items-center gap-1 text-sm font-satoshi">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-1">
              {index > 0 && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-1"
                >
                  <path
                    d="M6 4L10 8L6 12"
                    stroke="black"
                    strokeOpacity="0.6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-black/60 hover:text-black transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-black font-medium">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
