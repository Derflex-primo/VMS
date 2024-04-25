import React from "react";

const Portal = () => {
  return (
    <div className="h-[500px] w-[35%] shadow">
      <form action="" className="flex flex-col p-12 gap-8">
        <section className="h-[40px] w-[100px] bg-red-600"></section>
        <section>
          <h1 className="text-2xl font-semibold text-stone-800">Session log in</h1>
        </section>
        <section>
          <input
            type="email"
            className="w-full border-b border-slate-400 py-1 focus:outline-none focus:border-slate-600"
            placeholder="Email"
          />
          <h2 className="text-xs mt-4">
            No account? {' '}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Create one!
            </span>
          </h2>
          <h2 className="text-xs mt-4">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </h2>
        </section>
        <section className="flex flex-row justify-end gap-4 ">
          <button className="flex justify-end border p-1 px-12 font-semibold text-stone-800  ">
            Back
          </button>
          <button className="flex justify-end bg-sky-600 hover:bg-sky-700 p-1 px-12  text-stone-100 font-semibold">
            Next
          </button>
        </section>
      </form>
      <div className="flex items-end justify-end px-12 text-xs text-stone-600">
         *This portal is securely protected and maintained. All malicious activity will be detected.
      </div>
    </div>
  );
};

export default Portal;
