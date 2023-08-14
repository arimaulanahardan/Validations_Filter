// // components/InputField.tsx

// import React from "react";

// interface InputFieldProps {
//   label: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   error?: string | boolean;
//   placeholder: string;
//   type: string;
// }

// const InputField: React.FC<InputFieldProps> = ({
//   label,
//   value,
//   onChange,
//   error,
//   placeholder,
//   type,
// }) => {
//   return (
//     <div>
//       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//         {label}
//       </label>
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         required
//       />
//       {error && <p className="text-red-600 italic mb-2 text-sm">{error}</p>}
//     </div>
//   );
// };

// export default InputField;
