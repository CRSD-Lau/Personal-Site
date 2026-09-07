# Installed app icons and launch screen

Author: Neil Mitchell
Last modified by: Neil Mitchell

The installed app uses opaque PNGs in `public/icons/`. Android receives a separate maskable icon
with the portrait inside its central safe circle; Apple devices receive a dedicated 180px touch
icon. The browser favicon remains the existing transparent circular `app/icon.png`.

The operating system chooses the final home-screen icon shape. Providing a maskable image avoids
the fallback white surround described in [the web app manifest guide](https://web.dev/learn/pwa/web-app-manifest).

The reviewed `install-v2-512.png` master was prepared with the built-in image editor from the
existing headshot icon. Prompt: preserve the portrait, face, expression, lighting, and geometry;
fill the transparent corners with solid black; add no border, text, padding, or stretching.
`node scripts/build-install-icons.mjs` regenerates the 192px, maskable, and Apple variants from
that master using the project's installed Sharp package. Image metadata identifies Neil Mitchell
as author, creator, and last modifier.

`components/MobileLaunchScreen.tsx` and `app/mobile-launch.css` show a 144px circular portrait at
the visual viewport's horizontal and vertical center. The introduction holds for 1.8 seconds,
then fades for 250ms. Reduced motion retains the hold and removes the fade. Keyboard or pointer
interaction dismisses it immediately.

The introduction runs only in standalone display mode, including the iOS standalone flag, once
per browsing session. Ordinary browser visits and subsequent navigation open immediately. It
does not lock scrolling or change anchor navigation. When JavaScript or session storage is
unavailable, the site remains visible. CSS dismissal and a separate cleanup timer prevent the
introduction from getting stuck.

This introduction follows the browser-controlled native splash screen. The site cannot set the
native splash duration. Native icon appearance and splash behavior still require an installed
Android/iOS device check; desktop mobile emulation verifies the site-controlled introduction.

Icon filenames are versioned. An already-saved shortcut may retain its old image; after the fix is
deployed, remove that shortcut and install the site again if it still shows the previous icon.
