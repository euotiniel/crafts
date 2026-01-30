import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        <li>
          <Link href="/whatsapp">WhatsApp animation</Link>
        </li>
        <li>
          <Link href="/dynamic-form">Dynamic form</Link>
        </li>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/dynamic-island">Dynamic Island</Link>
        </li>
        <li>
          <Link href="/shared-layout">Shared Layout</Link>
        </li>
      </ul>
    </div>
  );
}
