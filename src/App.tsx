import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Vite + React + TypeScript
        </h1>
        <p className="text-center text-gray-600">
          Starter pack with TailwindCSS and shadcn/ui
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="default">Primary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
