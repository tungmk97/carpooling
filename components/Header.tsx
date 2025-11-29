import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold text-primary">
            Xe Ghép Nam Định - Hà Nội
          </h1>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
