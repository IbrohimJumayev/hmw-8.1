const TodayPage = () => {
  return (
    <div className="flex-1">
      <h1 className="mt-10 text-3xl font-semibold ">Today</h1>
      <div className="-ml-5 mr-5 my-10 px-10 py-10 today">
        <p className="text-3xl font-semibold">Today</p>
        <div className="flex gap-3 border rounded-xl items-center px-4  pt-2 pb-1 mt-5">
          <button>
            <span class="material-symbols-outlined">add_circle</span>
          </button>
          <input
            type="text"
            placeholder="Add new task"
            className="bg-transparent outline-none pb-2 text-xl font-thin"
          />
        </div>
      </div>
    </div>
  );
};

export default TodayPage;
