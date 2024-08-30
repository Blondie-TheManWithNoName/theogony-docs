import React from "react";

export default function GetComponent({ req, url }) {
  return (
    <p className="mt-8">
      <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 font-medium">
        {req}
      </mark>
      <code className="tracking-tighter ml-2">{url}</code>
    </p>
  );
}
