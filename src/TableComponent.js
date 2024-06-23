import React from "react";

export default function TableComponent({ list }) {
  return (
    <table className="w-8/12 text-sm text-left text-title mt-2">
      <thead>
        <tr>
          <th className="font-normal py-3">Name</th>
          <th className="font-normal">Description</th>
          <th className="font-normal">Type</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td className="font-semibold py-3">
              <code>{item.name}</code>
            </td>
            <td className="text-gray-500">{item.description}</td>
            <td className="text-gray-500 italic">{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
