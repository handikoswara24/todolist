import Box from "@/components/Box";

export default function Home() {
  return (
    <div className="flex justify-center flex-col">
      <header className="w-full">
        <h3 className="text-center text-lg">To Do List</h3>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-3 gap-12 w-full min-h-screen">
          <Box type={1} />
          <Box type={2} />
          <Box type={3} />
        </div>
      </main>
    </div>
  )
}
