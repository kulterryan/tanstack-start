// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ModeToggle } from '@/components/theme-toggle';

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
        <div className="gap-4">
          <div>
            <h2 className="text-lg text-center font-mono">How to Start?</h2>
            <div className="bg-muted p-4 rounded-lg border shadow-sm">
              <ol className="space-y-2 list-decimal list-inside">
                {/* <li className="text-sm">Set up your environment
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded">nvm use</code>
                </li> */}
                <li className="text-sm">Clone the repository
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">git clone https://github.com/your-repo/tanstack-start-demo.git</code>
                </li>
                <li className="text-sm">Install dependencies
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">npm install</code>
                </li>
                <li className="text-sm">Run development server
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">npm run dev</code>
                </li>
                <li className="text-sm">Open in browser
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">http://localhost:3000</code>
                </li>
                <li className="text-sm">Test the counter feature</li>
                <li className="text-sm">Check server logs
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">npm run logs</code>
                </li>
                <li className="text-sm">Customize for your needs</li>
                <li className="text-sm">Read documentation
                  <code className="ml-2 text-xs bg-gray-100 p-1 rounded dark:text-black">https://tanstack.com/start/latest</code>
                </li>
              </ol>
            </div>
          </div>
          <div className="text-center flex flex-col gap-2 my-5">
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
          <div className='flex flex-col items-center gap-2'>
            <h3>Theme Toggle</h3>
            <ModeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
