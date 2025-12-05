export default function Modal({ open, title, children, onClose }) {
  if (!open) return null;
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden="true" />
      <div className="relative z-10 w-full max-w-md rounded-xl bg-white p-5 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-text">{title}</h3>
          <button onClick={onClose} aria-label="Close modal" className="text-secondary hover:text-primary">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}
