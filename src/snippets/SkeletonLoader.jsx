const CardSkeleton = () => {
  return (
    <div className="w-full min-h-screen flex flex-wrap justify-center items-center p-4 gap-3">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-[300px] flex flex-col justify-between border border-gray-300 shadow-2xl rounded-lg p-4 h-[420px] bg-white animate-pulse"
        >
          <div className="w-full animate-pulse">
            <div className="rounded w-full h-[200px] animate-pulse bg-gray-200" />
            <div className="w-full felx justify-between items-center py-2">
              <div className="w-full h-[30px] bg-gray-200 animate-pulse rounded" />
              <div className="w-24 h-[30px] bg-gray-200 animate-pulse mt-2 rounded" />
            </div>
            <div className=" space-y-2 py-1 animate-pulse">
              <div className="h-2 bg-slate-200 rounded animate-pulse" />
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-3 ">
                  <div className="h-2 bg-slate-300 rounded col-span-2 animate-pulse" />
                  <div className="h-2 bg-slate-300 rounded col-span-1 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <div className="bg-transparent  text-black border py-4 px-12 rounded animate-pulse" />
            <div className="bg-gray-200 text-white rounded py-4 px-12 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

const DetailCardSkeleton = () => {
  return (
    <div className="w-full min-h-screen-[70px] flex justify-center items-center p-4 gap-3">
      <div className="w-3/4 flex justify-between border border-gray-300 shadow-2xl gap-6 rounded-lg p-4 min-h-[520px] bg-white">
        <div className="w-full bg-gray-200 animate-pulse rounded">
          <span className="rounded w-full h-full " />
        </div>
        <div className=" w-full flex flex-col gap-y-6">
          <div className="flex justify-between">
            <div className="w-96 h-[30px] bg-gray-200 rounded animate-pulse" />
            <div className="w-[80px] h-[30px] bg-gray-200 rounded animate-pulse" />
          </div>
          <div className=" h-[200px] space-y-6 py-1 animate-pulse">
            <div className="h-2 bg-slate-200 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2" />
                <div className="h-2 bg-slate-200 rounded col-span-1" />
              </div>
              <div className="h-2 bg-slate-200 rounded" />
            </div>
            <div className="h-2 bg-slate-200 rounded" />
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-2" />
                <div className="h-2 bg-slate-200 rounded col-span-1" />
              </div>
              <div className="h-2 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="w-full flex flex-col justify-between items-center gap-4 animate-pulse">
            <div className="bg-transparent py-2 px-4 text-black border w-full rounded">
              <div className="flex gap-4">
                <div className="px-6 border rounded bg-gray-200 h-[30px]" />
                <div className="px-6 border rounded bg-gray-200 h-[30px]" />
              </div>
            </div>
            <div className="bg-gray-300 py-2 px-4 w-full h-[40px] rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { CardSkeleton, DetailCardSkeleton };
