const Select = (props) => {
  const { setCB, id, value, label, items } = props;
  return (
    <label htmlFor={id}>
      {label}
      <select
        value={value}
        id={id}
        onChange={(e) => setCB(e.target.value)}
        onBlur={(e) => setCB(e.target.value)}
      >
        {items.map((item) => {
          if (!item) {
            return <option />;
          }
          return (
            <option value={item} key={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );
};

export default Select;
