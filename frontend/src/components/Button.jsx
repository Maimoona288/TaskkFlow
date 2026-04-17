const Button = ({ text, loading, ...props }) => {
  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className="w-full bg-blue-600 text-white rounded-xl py-3 flex items-center justify-center gap-2 font-medium text-sm transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Loading..." : text}
    </button>
  );
};

export default Button;