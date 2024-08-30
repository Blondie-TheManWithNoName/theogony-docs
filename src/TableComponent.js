import React from "react";

export default function TableComponent({ list, marginTop }) {
  return (
    <table
      className="w-8/12 text-sm text-left text-title mt-2"
      style={{ marginTop: marginTop }}
    >
      <thead>
        <tr>
          <th className="font-normal py-3 text-gray-500">Name</th>
          <th className="font-normal text-gray-500">Description</th>
          <th className="font-normal text-gray-500">Type</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td className="font-semibold py-3">
              <code>{item.name}</code>
            </td>
            <td className="text-title">{item.description}</td>
            <td className="text-title italic">{item.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
