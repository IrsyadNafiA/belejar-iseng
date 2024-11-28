import PropTypes from "prop-types";

const FormControlInput = ({ label, type, options, formik }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-white font-bold mb-2 capitalize"
      >
        {label}
      </label>
      {type === "select" ? (
        <select
          name={label}
          id={label}
          onChange={formik.handleChange} // Gunakan Formik handleChange
          onBlur={formik.handleBlur} // Tambahkan Formik handleBlur
          value={formik.values[label]} // Nilai dari Formik state
          className="w-full p-2 bg-gray-800 text-white rounded capitalize"
        >
          <option value="">Select</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : type === "file" ? (
        <input
          type={type}
          id={label}
          name={label}
          onChange={(event) => {
            const file = event.currentTarget.files[0];
            formik.setFieldValue("image", file);
          }}
          onBlur={formik.handleBlur}
          className="w-full p-2 bg-gray-800 text-white rounded"
          placeholder={`Enter product ${label}`}
        />
      ) : (
        <input
          type={type}
          id={label}
          name={label}
          onChange={formik.handleChange} // Gunakan Formik handleChange
          onBlur={formik.handleBlur} // Tambahkan Formik handleBlur
          value={formik.values[label] || ""} // Nilai dari Formik state
          className="w-full p-2 bg-gray-800 text-white rounded"
          placeholder={`Enter product ${label}`}
        />
      )}
      {formik.errors[label] && formik.touched[label] && (
        <div className="text-red-500 mb-2">{formik.errors[label]}</div>
      )}
    </div>
  );
};

FormControlInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  formik: PropTypes.object.isRequired, // Tambahkan formik sebagai prop
};

export { FormControlInput };
