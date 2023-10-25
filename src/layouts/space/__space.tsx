export function Space() {
  return (
    <main>
      <section>
        <div className="py-5">
          <h1 className="text-white">My space</h1>
        </div>
        {/* Content Area Starts */}
        <div>
          <div className="flex flex-wrap gap-3 items-center">
            <p className="text-[#A9A9A9]">November 25, 2023</p>
          </div>
          {/* Text Content Area Starts */}
          <div className="w-full py-3">
            <img
              src="https://64.media.tumblr.com/6559cad17f80d13d062bedd22bea1aeb/c21c3e89f53f896f-35/s1280x1920/8c43ccc783e3ead7875b3d28a9699e3e35f84494.jpg"
              alt="space"
              className="rounded-lg cursor-pointer hover:opacity-90"
            />
          </div>
          {/* Text Content Area Ends */}
        </div>
        {/* Content Area Ends */}
        <div className="py-10">
          <hr />
        </div>
      </section>
    </main>
  );
}
