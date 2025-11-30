'use client';

import Button from '@/src/app/components/button';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-2xl font-bold mb-4">
        Something went wrong! {error.message}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
