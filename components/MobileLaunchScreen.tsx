import Image from "next/image";

// Activate before hydration; dismissal never depends on React mounting.
export const mobileLaunchScript = `
  (function () {
    var root = document.documentElement;
    var viewport = window.visualViewport;
    var timer;

    function dismiss() {
      root.removeAttribute("data-mobile-launch");
      window.clearTimeout(timer);
      window.removeEventListener("keydown", dismiss, true);
      window.removeEventListener("pointerdown", dismiss, true);
      window.removeEventListener("pagehide", dismiss);
      window.removeEventListener("resize", center);
      document.removeEventListener("animationend", onAnimationEnd);
      if (viewport) {
        viewport.removeEventListener("resize", center);
        viewport.removeEventListener("scroll", center);
      }
    }

    function center() {
      root.style.setProperty("--mobile-launch-left", (viewport ? viewport.offsetLeft : 0) + "px");
      root.style.setProperty("--mobile-launch-top", (viewport ? viewport.offsetTop : 0) + "px");
      root.style.setProperty("--mobile-launch-width", (viewport ? viewport.width : window.innerWidth) + "px");
      root.style.setProperty("--mobile-launch-height", (viewport ? viewport.height : window.innerHeight) + "px");
    }

    function onAnimationEnd(event) {
      if (event.animationName === "mobile-launch-dismiss") dismiss();
    }

    try {
      var installed = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
      if (!installed || sessionStorage.getItem("neil-mobile-launch-seen")) return;
      // If storage is unavailable, leave the page immediately usable.
      sessionStorage.setItem("neil-mobile-launch-seen", "1");

      center();
      window.addEventListener("keydown", dismiss, true);
      window.addEventListener("pointerdown", dismiss, true);
      window.addEventListener("pagehide", dismiss);
      window.addEventListener("resize", center, { passive: true });
      document.addEventListener("animationend", onAnimationEnd);
      if (viewport) {
        viewport.addEventListener("resize", center, { passive: true });
        viewport.addEventListener("scroll", center, { passive: true });
      }
      // CSS normally dismisses after 1.8s + 250ms; this also covers disabled animations.
      timer = window.setTimeout(dismiss, 2300);
      root.setAttribute("data-mobile-launch", "active");
    } catch (error) {
      dismiss();
    }
  })();
`;

export default function MobileLaunchScreen() {
  return (
    <div className="mobile-launch" aria-hidden="true">
      <Image
        className="mobile-launch__portrait"
        src="/icon.png"
        alt=""
        width={144}
        height={144}
        loading="eager"
        fetchPriority="high"
        draggable={false}
      />
    </div>
  );
}
