import React, { ReactNode } from "react";

interface TableColumn<T extends { [key: string]: unknown }> {
  header: string;
  accessor: keyof T;
  render?: (value: T[keyof T], row: T, idx: number) => ReactNode;
}

interface TableProps<T extends { [key: string]: unknown }> {
  columns: TableColumn<T>[];
  data: T[];
  actions?: (row: T, idx: number) => ReactNode;
}

function Table<T extends { [key: string]: unknown }>({ columns, data, actions }: TableProps<T>) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-blue-50">
            {columns.map((col) => (
              <th key={col.header} className="py-2 px-4 text-left font-semibold">{col.header}</th>
            ))}
            {actions && <th className="py-2 px-4 text-left font-semibold">Action</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-b hover:bg-blue-50">
              {columns.map((col) => (
                <td key={col.header} className="py-2 px-4">
                  {col.render ? col.render(row[col.accessor], row, idx) : (row[col.accessor] as ReactNode)}
                </td>
              ))}
              {actions && <td className="py-2 px-4">{actions(row, idx)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
