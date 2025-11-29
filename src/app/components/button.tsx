import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        'px-5 py-2.5 rounded bg-gray-900 text-zinc-50 text-base text-center font-medium hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300',
        !disabled && 'hover:bg-gray-800 active:bg-gray-950',
        disabled && 'text-zinc-100 cursor-not-allowed',
      )}
    />
  );
}
