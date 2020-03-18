import React from "react";

const TableRow = props => {
  const { children } = props;
  console.log(children);
  return (
    <tr>
      {children.map(ch => {
        return ch;
      })}
    </tr>
  );
};

export default function HeaderTbSME(props) {
  const { htmlElement } = props;
  console.log(htmlElement);

  /**
   * Retornar a cada celula da header de uma tabela
   */
  const TableCell = () => {
    return htmlElement.map(cell => {
      console.log(cell);
      return <th>hhh</th>;
    });
  };

  return (
    <thead className="text-primary">
      <TableRow>{TableCell()}</TableRow>
    </thead>
  );
}
