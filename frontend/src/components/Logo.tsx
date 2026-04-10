'use client';

interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = '', color = '#1A1A1A' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ARCTen Logo"
    >
      {/* Geometric Arc Symbol */}
      <path
        d="M5 40 L20 10 L35 40"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M10 30 L20 15 L30 30"
        stroke="#C4A052"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* ARCTen Text */}
      <text
        x="45"
        y="35"
        fontFamily="Playfair Display, serif"
        fontSize="28"
        fontWeight="600"
        fill={color}
        letterSpacing="3"
      >
        ARC
      </text>
      <text
        x="115"
        y="35"
        fontFamily="Playfair Display, serif"
        fontSize="28"
        fontWeight="400"
        fill="#8B7355"
        letterSpacing="3"
      >
        Ten
      </text>
    </svg>
  );
}
