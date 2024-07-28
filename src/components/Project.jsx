import React from "react";

export default function Project({ name, url, thumbnail, info }) {
  return (
    <div className="prose flex flex-col items-center space-y-4 rounded-lg p-4 font-mono opacity-70 hover:border hover:border-black hover:bg-[#3c3a3a] hover:opacity-100">
      <img
        src={thumbnail}
        alt={`${name} Thumbnail`}
        className="h-54 w-96 rounded object-cover"
      />
      <div className="">
        <h3 className="prose mb-4 text-center font-serif text-lg font-semibold text-[#f5e0bf]">
          {name}
        </h3>
        <h4 className="prose font-mono text-sm font-normal text-white">
          {info}
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
