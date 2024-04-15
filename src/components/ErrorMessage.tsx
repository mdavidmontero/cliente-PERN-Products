import { PropsWithChildren } from "react";

export const ErrorMessage = ({ children }: PropsWithChildren) => {
  return (
    <div className="text-center py-4 my-4 bg-red-600 text-white font-bold uppercase">
      {children}
    </div>
  );
};
