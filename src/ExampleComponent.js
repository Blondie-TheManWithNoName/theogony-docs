import React from "react";
import ReactJson from "react-json-view";

export default function ExampleComponent({
  title,
  description,
  req,
  url,
  jsonFiles,
}) {
  const customStyle = {
    backgroundColor: "#fafafa",
  };
  return (
    <section className="w-8/12 mt-10">
      <h2 className="text-2xl uppercase tracking-tight font-cocogoose text-title">
        {title}
      </h2>
      <p className="mb-4">{description}</p>
      {(jsonFiles.length <= 1 ? url : url.slice(0, 1)).map((item, index) => (
        <p className="mt-2" key={index}>
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 select-none">
            {req}
          </mark>
          <code className="tracking-tighter ml-2">{item}</code>
        </p>
      ))}
      {jsonFiles.map((file, index) => (
        <div key={index} className="mt-2">
          {index > 0 ? (
            <p className="mt-8">
              <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                {req}
              </mark>
              <code className="tracking-tighter ml-2">{url[index]}</code>
            </p>
          ) : null}
          <p className="mt-5">
            <ReactJson
              src={file}
              enableClipboard={false}
              displayDataTypes={false}
              quotesOnKeys={false}
              name={false}
              style={customStyle}
            />
          </p>
        </div>
      ))}
    </section>
  );
}
