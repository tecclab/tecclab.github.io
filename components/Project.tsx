import React from "react";

export default function Project({
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
    <a className="project" href={href}>
      <img src={src} alt={alt} />
      <h2>{children}</h2>
    </a>
  );
}
