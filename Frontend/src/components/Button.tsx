interface ButtonProps {
  onClick: () => void;
  text: string;
  variant?: "primary" | "secondary";
  startIcon?: any;
  disabled?: boolean;
}

export function Button({ onClick, text, variant = "primary", startIcon, disabled }: ButtonProps) {
  const baseStyles = "flex items-center gap-2 px-4 py-2 rounded-xl font-medium shadow-md transition";
  const primary = "px-2 py-1 border text-sm bg-[#E85A5A] text-white hover:bg-[#d54848] transition font-semibold rounded-md";
  const secondary ="px-2 py-1 border text-sm text-gray-800 hover:bg-[#e0e0e043] transition font-semibold rounded-md";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variant === "primary" ? primary : secondary} ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {startIcon}
      {text}
    </button>
  );
}
