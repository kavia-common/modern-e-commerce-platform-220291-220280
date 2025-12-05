export default function Footer() {
  return (
    <footer className="bg-white border-t border-primary/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-sm text-secondary">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} RoyalShop. All rights reserved.</p>
          <nav className="flex gap-4">
            <a href="#privacy" className="hover:text-primary">Privacy</a>
            <a href="#terms" className="hover:text-primary">Terms</a>
            <a href="#help" className="hover:text-primary">Help</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
