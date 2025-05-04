export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-blue-950 aspect-video rounded-xl" />
        <div className="bg-blue-950 aspect-video rounded-xl" />
        <div className="bg-blue-950 aspect-video rounded-xl" />
      </div>
      <div className="bg-blue-950 min-h-[50vh] flex rounded-xl justify-center items-center">
        <h1 className="text-xl text-white">Welcome</h1>
      </div>
    </div>
  );
}
