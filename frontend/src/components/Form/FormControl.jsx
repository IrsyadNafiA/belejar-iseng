const FormControlInput = (props) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={props.label}
        className="block text-white font-bold mb-2 capitalize"
      >
        {props.label}
      </label>
      <input
        type={props.type}
        id={props.label}
        name={props.label}
        onChange={props.onChange}
        className="w-full p-2 bg-gray-800 text-white rounded"
      />
    </div>
  );
};

export { FormControlInput };
