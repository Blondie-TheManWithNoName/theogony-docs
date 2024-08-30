import React from "react";
import ReactJson from "react-json-view";
import GetComponent from "./GetComponent";

export default function ExampleComponent({
  title,
  description,
  req,
  url,
  jsonFiles,
  marginTop,
}) {
  const customStyle = {
    backgroundColor: "#fafafa",
  };
  return (
    <>
      <p className="mb-4" style={{ marginTop: marginTop }}>
        {description}
      </p>
      {(jsonFiles.length <= 1 ? url : url.slice(0, 1)).map((item, index) => (
        <p className="mt-2" key={index}>
          <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 select-none font-medium">
            {req}
          </mark>
          <code className="tracking-tighter ml-2">{item}</code>
        </p>
      ))}
      {jsonFiles.map((file, index) => (
        <div key={index} className="mt-2">
          {index > 0 ? GetComponent((req = { req }), (url = url[index])) : null}
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
    </>
  );
}
