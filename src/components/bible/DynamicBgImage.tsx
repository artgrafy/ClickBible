"use client";

import Image from "next/image";
import { useState } from "react";

interface DynamicBgImageProps {
    src: string;
    fallbackSrc: string;
}

export default function DynamicBgImage({ src, fallbackSrc }: DynamicBgImageProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            src={imgSrc}
            alt="Current Theme Background"
            fill
            className="object-cover opacity-30 mix-blend-multiply"
            priority
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
}
