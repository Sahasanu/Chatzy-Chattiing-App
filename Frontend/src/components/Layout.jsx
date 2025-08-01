import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isChatPage = location.pathname.startsWith("/chat/");

  const showNavbar = !(isMobile && isChatPage);
  const showSidebar = !(isMobile && isChatPage);

  return (
    <div className="h-[100vh] w-[100vw] relative">
      {showNavbar && <Navbar />}

      {/* Desktop View */}
      {!isMobile && (
        <div className="flex gap-[10px] mt-[5px]">
          <div className="w-[28%] ml-[5px] h-[90vh] border"><Sidebar /></div>
          <div className="w-[72%] h-[90vh] rounded-[5px]"><Outlet /></div>
        </div>
      )}

      {/* Mobile View */}
      {isMobile && (
        <div className="w-[99%] h-[89vh]">
          {showSidebar && <Sidebar isMobile={true} />}
          {isChatPage && <Outlet />}
        </div>
      )}
    </div>
  );
}
