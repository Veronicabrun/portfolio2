function FormInput({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  textarea = false,
}) {
  const inputClasses = `w-full rounded-2xl border px-5 py-4 text-gray-900 outline-none transition focus:bg-white focus:ring-4 ${
    error
      ? "border-red-400 bg-red-50 focus:ring-red-100"
      : "border-pink-100 bg-pink-50/40 focus:border-pink-400 focus:ring-pink-100"
  }`;

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-gray-700">
        {label}
      </label>

      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows="6"
          placeholder={placeholder}
          className={`${inputClasses} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}

      {error && <p className="mt-2 text-sm font-medium text-red-500">{error}</p>}
    </div>
  );
}

export default FormInput;