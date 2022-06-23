import React from "react";

export default function Opportunity({
  children,
  href,
  src,
  alt,
}: {
  children: React.ReactNode;
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a className="opportunity" href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={alt} />
      <h2>{children}</h2>
    </a>
  );
}
