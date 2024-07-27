import React from "react";

export default function Project({ name, url, thumbnail, info }) {
  return (
    <div className="flex items-center space-x-4 rounded-lg p-4">
      <img
        src={thumbnail}
        alt={`${name} Thumbnail`}
        className="h-54 w-96 rounded object-cover"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <h4 className="text-sm font-thin">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </h4>
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
