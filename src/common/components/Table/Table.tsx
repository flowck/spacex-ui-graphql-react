import { Link } from "react-router-dom";
import Tag from "@kiwicom/orbit-components/lib/Tag";
import OrbitTable, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";

type Column = { name: string; label?: string; isTag?: boolean };
type Row = Record<string, string | number | boolean>;

interface Props {
  rows: unknown[];
  columns: Column[];
  rowLink?: string;
}

export function Table({ rows, columns, rowLink }: Props) {
  const renderTags = (value: boolean, name: string) => {
    return (
      <TableCell key={name}>
        <Tag> {value ? "Succeeded" : "Failed"} </Tag>{" "}
      </TableCell>
    );
  };

  const renderLink = (row: Row, name: string) => {
    return (
      <TableCell key={name}>
        <Link style={{ color: "initial", textDecoration: "none" }} to={`${rowLink}/${row.id}`}>
          {row[name] || name}
        </Link>
      </TableCell>
    );
  };

  const renderColumns = (row?: Row) => {
    return columns.map(({ name, label, isTag }) => {
      // Render boolens as <Tag />
      if (row && isTag) {
        return renderTags(row[name] as boolean, name);
      }

      // Render rows with links
      if (row && rowLink) {
        return renderLink(row, name);
      }

      return <TableCell key={name}>{row ? row[name] : label || name}</TableCell>;
    });
  };

  const renderRows = () => {
    return rows.map((row, index) => <TableRow key={index}>{renderColumns(row as Row)}</TableRow>);
  };

  return (
    <OrbitTable>
      <TableHead>
        <TableRow>{renderColumns()}</TableRow>
      </TableHead>

      <TableBody>{renderRows()}</TableBody>
    </OrbitTable>
  );
}
