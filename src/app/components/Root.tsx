import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { StartupAnimation } from "./StartupAnimation";

export function Root() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("rareAnimationShown");
    if (hasSeenAnimation) {
      setShowAnimation(false);
      setAnimationComplete(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    sessionStorage.setItem("rareAnimationShown", "true");
    setAnimationComplete(true);
  };

  return (
    <>
      {showAnimation && !animationComplete && (
        <StartupAnimation onComplete={handleAnimationComplete} />
      )}
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
