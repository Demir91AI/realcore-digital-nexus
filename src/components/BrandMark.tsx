interface BrandMarkProps {
  size?: number;
  className?: string;
}

/**
 * RealCore Digital brand mark — a gradient tile with a stylized "R".
 * Pure CSS/SVG so it stays crisp at any size and avoids broken-image issues.
 */
const BrandMark = ({ size = 40, className = "" }: BrandMarkProps) => {
  return (
    <div
      className={`relative shrink-0 rounded-xl flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "linear-gradient(135deg, hsl(197 100% 50%) 0%, hsl(228 90% 55%) 55%, hsl(258 100% 59%) 100%)",
        boxShadow:
          "0 0 24px hsl(197 100% 50% / 0.35), inset 0 1px 0 hsl(0 0% 100% / 0.25)",
      }}
      aria-hidden="true"
    >
      <span
        className="font-bold text-white leading-none select-none"
        style={{
          fontSize: size * 0.55,
          fontFamily: "'Space Grotesk', sans-serif",
          letterSpacing: "-0.05em",
          textShadow: "0 1px 2px hsl(222 47% 5% / 0.4)",
        }}
      >
        R
      </span>
    </div>
  );
};

export default BrandMark;
