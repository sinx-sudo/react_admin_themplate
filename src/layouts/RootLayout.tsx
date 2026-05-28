import { useState } from "react";
import { Outlet } from "react-router";
import NavbarLeft from "./NavbarLeft";

export default function RootLayout() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <NavbarLeft isOpen={isOpen} setIsOpen={setIsOpen} />

      <section className={`flex-1 p-4 transition-all duration-300
  ${isOpen ? "ml-64" : "ml-12"}`}>
        {/* ml-0 */}
        <Outlet />
      </section>
    </div>
  );
}