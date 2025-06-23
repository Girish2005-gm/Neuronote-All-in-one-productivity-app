// src/components/Loader.tsx
import "../styles/loader.css"; // Ensure CSS is imported

export function Loader() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="loader" style={{ "--c": "#E85A5A" } as React.CSSProperties}></div>
    </div>
  );
}
