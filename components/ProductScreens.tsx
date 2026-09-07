"use client";

import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    label: "受付を作る画面",
    src: "/screenshots/ato-create-mobile.png",
    alt: "Atoの受付作成画面。イベント名・店名と任意の説明を入力し、「受付を開始する」を押します。",
    caption: "イベント名や店名を入力して、受付を開始します。",
  },
  {
    label: "トップ画面",
    src: "/screenshots/ato-home-mobile.png",
    alt: "Atoのトップ画面。「新しい受付を作る」ボタンから作成画面に進めます。",
    caption: "「新しい受付を作る」から始められます。",
  },
];

export default function ProductScreens() {
  const [selected, setSelected] = useState(0);
  const screen = screens[selected];

  return (
    <div className="product-images">
      <div className="screen-switch" role="group" aria-label="表示するAtoの画面">
        {screens.map((item, index) => (
          <button
            type="button"
            key={item.src}
            aria-pressed={selected === index}
            aria-controls="ato-screen"
            onClick={() => setSelected(index)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <figure className="screen-figure" id="ato-screen">
        <div className="screen-crop">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={390}
            height={844}
            priority
            sizes="(max-width: 600px) 80vw, 320px"
          />
        </div>
        <figcaption aria-live="polite">{screen.caption}</figcaption>
      </figure>
    </div>
  );
}
