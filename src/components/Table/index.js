import './index.css';

export default function Table({ children, minWidth }) {
  return (
    <div className='tablecontainer' >
      <table
        className='table'
        style={{ minWidth: minWidth ? minWidth : '1000px' }}
      >
        {children}
      </table>
    </div>
  );
}

function TableHead({ children }) {
  return (
    <thead className='tablehead'>
      {children}
    </thead>
  );
}

function TableBody({ children }) {
  return (
    <tbody className='tablebody'>
      {children}
    </tbody>
  );
}

function Tr({ children, onClick, ...rest }) {
  return (
    <tr
      className='tr'
      onClick={onClick ? onClick : null}
      style={onClick ? { cursor: 'pointer' } : {}}
      {...rest}
    >
      {children}
    </tr>
  );
}

function Td({ children }) {
  return <td className='td'>{children}</td>;
}

function Th({ children }) {
  return <th className='th'>{children}</th>;
}

Table.Td = Td;
Table.Tr = Tr;
Table.Th = Th;
Table.Thead = TableHead;
Table.TBody = TableBody;
