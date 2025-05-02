// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

let count = 0;

const getCount = createServerFn({
  method: 'GET',
}).handler(() => {
  return count;
});

const updateCount = createServerFn({ method: 'POST' })
  .validator((d: number) => d)
  .handler(async ({ data }) => {
    count += data;
  });

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
});

function Home() {
  const router = useRouter();
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container max-w-lg mx-auto flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold text-center">Tanstack Start + ShadCN/ui</h1>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h2 className="text-lg text-center font-mono">How to Start?</h2>
            <ol>
              <li>Step 1: Set up your environment.</li>
              <li>Step 2: Clone the GitHub repository.</li>
              <li>Step 3: Install the dependencies.</li>
              <li>Step 4: Run the development server.</li>
              <li>Step 5: Open your browser and navigate to the app.</li>
              <li>Step 6: Click the button to see the counter in action.</li>
              <li>Step 7: Check the console for server action logs.</li>
              <li>Step 8: Modify the code to suit your needs.</li>
              <li>Step 9: Enjoy building your application!</li>
              <li>Step 10: Share your feedback and contributions.</li>
              <li>Step 11: Explore the documentation for more features.</li>
            </ol>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3>Server Action Example</h3>
            <p>Count: {counter}</p>
            <Button
              type="button"
              onClick={() => {
                setCounter((prev) => prev + 1);
                updateCount({ data: 1 });
              }}
            >
              Click me to +1?
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
