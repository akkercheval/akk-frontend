/**
 * Inline SVG squirrel mascot — used ONLY on the 404 page.
 * This is the "hilariously bad" generated squirrel.
 */
export function SquirrelMascot404({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      role="img"
      aria-label="Lost squirrel mascot"
    >
      {/* Tail */}
      <path
        d="M85 55c5-20 20-30 25-25s-5 20-15 30c-5 5-12 8-15 5"
        fill="#8B5E3C"
        stroke="#5C3D1E"
        strokeWidth="1.5"
      />
      <path
        d="M88 52c3-12 12-20 16-17s-2 14-9 21"
        fill="#A67C52"
        stroke="none"
      />

      {/* Body */}
      <ellipse cx="65" cy="72" rx="20" ry="22" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1.5" />
      {/* Belly */}
      <ellipse cx="62" cy="78" rx="12" ry="14" fill="#DEB887" stroke="none" />

      {/* Head */}
      <circle cx="48" cy="48" r="16" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1.5" />
      {/* Cheek */}
      <ellipse cx="44" cy="54" rx="8" ry="6" fill="#DEB887" stroke="none" />

      {/* Ear */}
      <ellipse cx="38" cy="35" rx="5" ry="7" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1.5" />
      <ellipse cx="38" cy="35" rx="3" ry="4" fill="#DEB887" stroke="none" />

      {/* Eye — confused spiral */}
      <circle cx="44" cy="45" r="3.5" fill="#1a1a1a" />
      <path d="M44 43c1.5 0 2.5 1 2.5 2s-1.5 2-2.5 2" stroke="white" strokeWidth="0.8" fill="none" />

      {/* Nose */}
      <ellipse cx="36" cy="50" rx="2.5" ry="2" fill="#5C3D1E" />

      {/* Confused mouth */}
      <path d="M36 54c1 1 3 0 4-1" stroke="#5C3D1E" strokeWidth="1" fill="none" strokeLinecap="round" />

      {/* Question mark above head */}
      <text x="55" y="28" fontSize="14" fill="#5C3D1E" fontFamily="serif" fontWeight="bold">?</text>

      {/* Front paws */}
      <ellipse cx="50" cy="90" rx="5" ry="4" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1" />
      <ellipse cx="62" cy="92" rx="5" ry="4" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1" />

      {/* Hind paw */}
      <ellipse cx="78" cy="92" rx="6" ry="4" fill="#A67C52" stroke="#5C3D1E" strokeWidth="1" />
    </svg>
  );
}
