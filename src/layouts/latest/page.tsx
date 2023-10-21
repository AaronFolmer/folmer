import { Circle } from "lucide-react";

export function Latest() {
  return (
    <main>
      <section>
          <div className="py-5">
            <h2 className="text-[#A9A9A9]">Latest</h2>
          </div>
          {/* Content Area Starts */}
          <div>
            <h1 className="text-white">
              <a>Integrating API</a>
            </h1>
            <div className="flex flex-wrap gap-3 items-center py-3">
              <p className="text-[#A9A9A9]">November 21, 2023</p>
              <Circle size={10} color="#A9A9A9" />
              <p className="text-[#A9A9A9]">1 minute read</p>
            </div>
            {/* Text Content Area Starts */}
            <div className="w-full">
              <p className="text-[#A9A9A9]">
                Integrating OpenAI API to use on a recent personal project, <a className="underline text-white" target="__blank" href="https://github.com/AaronFolmer/recipeai">recipeai</a>, and learning more about
                the AI models developed by OpenAI.
              </p>
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
