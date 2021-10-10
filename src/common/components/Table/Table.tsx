import Tag from "@kiwicom/orbit-components/lib/Tag";
import OrbitTable, { TableHead, TableBody, TableRow, TableCell } from "@kiwicom/orbit-components/lib/Table";

type Column = { name: string; label?: string; isTag?: boolean };
type Row = Record<string, string | number>;

interface Props {
  rows: unknown[];
  columns: Column[];
}

export function Table({ rows, columns }: Props) {
  const renderColumns = (row?: Row) => {
    return columns.map(({ name, label, isTag }) => {
      // Render boolens as <Tag />
      if (row && isTag) {
        return (
          <TableCell>
            <Tag> {row[name] ? "Succeeded" : "Failed"} </Tag>{" "}
          </TableCell>
        );
      }

      return <TableCell>{row ? row[name] : label || name}</TableCell>;
    });
  };

  const renderRows = () => {
    return rows.map((row) => <TableRow>{renderColumns(row as Row)}</TableRow>);
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
