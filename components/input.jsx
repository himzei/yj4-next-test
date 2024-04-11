export default function Input({ errors = [], name, ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="px-4
				bg-transparent rounded-md w-full h-10 transition
				focus:outline-none border-none ring-1 ring-neutral-200
				focus:ring-4 focus:ring-orange-500
			placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  );
}
