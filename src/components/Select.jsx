export default function Select(props) {
  const { onChange, options, value } = props;
  return (
    <>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(({ value, text }) => (
          <option value={value}>{text}</option>
        ))}
      </select>
    </>
  );
}
