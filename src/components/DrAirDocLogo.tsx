interface Props {
  className?: string;
}

export default function DrAirDocLogo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 220 110"
      className={className}
      role="img"
      aria-label="DrAirDoc Logo"
    >
      {/* Badge circle */}
      <circle cx="55" cy="55" r="50" fill="white" opacity="0.12" />
      <circle cx="55" cy="55" r="44" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />

      {/* Medical cross */}
      <rect x="47" y="30" width="16" height="50" rx="4" fill="white" opacity="0.95" />
      <rect x="30" y="47" width="50" height="16" rx="4" fill="white" opacity="0.95" />

      {/* Air wave lines to the right of cross */}
      <path d="M 72 42 Q 80 38 88 42 Q 96 46 104 42" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 72 55 Q 80 51 88 55 Q 96 59 104 55" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
      <path d="M 72 68 Q 80 64 88 68 Q 96 72 104 68" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />

      {/* DrAirDoc text */}
      <text
        x="110"
        y="48"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="white"
        letterSpacing="-0.5"
      >
        DrAirDoc
      </text>
      <text
        x="112"
        y="68"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fontSize="11"
        fill="white"
        opacity="0.8"
        letterSpacing="1.5"
      >
        AIR DUCT EXPERTS
      </text>
    </svg>
  );
}
