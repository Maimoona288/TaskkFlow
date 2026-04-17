const InputField = ({
  label,
  type = "text",
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-5">
      {label && (
        <label className="block font-medium text-slate-700 mb-1.5 text-sm">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3.5 py-3 rounded-xl border border-slate-300 outline-none text-sm transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 bg-white"
      />
    </div>
  );
};

export default InputField;