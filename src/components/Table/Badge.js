import classname from 'classname'

export const Badge = ({ value, type }) => {
  return <div className={classname('badge', type)}>{value}</div>;
};
