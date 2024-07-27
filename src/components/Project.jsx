import React from "react";

export default function Project({ name, url, thumbnail, info }) {
  return (
    <div className="flex flex-col items-center space-y-4 rounded-lg p-4">
      <img
        src={thumbnail}
        alt={`${name} Thumbnail`}
        className="h-54 w-96 rounded object-cover"
      />
      <div className="">
        <h3 className="text-center font-serif text-lg font-semibold text-red-400">
          {name}
        </h3>
        <h4 className="font-mono text-sm font-normal">{info}</h4>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Visit Project
        </a>
      </div>
    </div>
  );
}
