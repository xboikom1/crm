'use client';

import Button from '@/src/app/components/button';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-2xl font-bold mb-4">
        Something went wrong! {error.message}
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
