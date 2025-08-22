import AuthComponent from "@/components/AuthComponent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">
        Welcome to Amplify + Next.js
      </h1>
      <AuthComponent />
    </main>
  );
}