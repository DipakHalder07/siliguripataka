"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useCart } from "./context/CartContext";

const SearchDrawer = dynamic(() => import("./SearchDrawer"), { ssr: false });

/** Loads the search drawer the first time it is opened, so pages start faster on phones. */
export default function LazySearchDrawer() {
  const { isSearchOpen } = useCart();
  const [loaded, setLoaded] = useState(false);
  if (isSearchOpen && !loaded) setLoaded(true);
  return loaded ? <SearchDrawer /> : null;
}
