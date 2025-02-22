import { MdCancel } from "react-icons/md";

export const ErrorMessage = ({ message }) => {
  return (
    <p className="flex items-center gap-1 text-red-500 text-xs mt-1 font-medium">
      <MdCancel />
      <span>{message}</span>
    </p>
  );
};
