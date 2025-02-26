
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="min-h-screen flex flex-col items-center p-32">
      <div className="text-3xl font-medium p-4">
        <h1>React Hook Forms</h1>
      </div>
      <div className="flex gap-x-4">
        <div>Regular</div>
        <div>With RHF</div>
      </div>
      {children}
    </div>
  );

}