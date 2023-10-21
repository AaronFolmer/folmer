import { Circle } from "lucide-react";

export function AboutLayout() {
  return (
    <main>
      <section>
        <div className="py-5">
          <h1 className="text-white">About me</h1>
        </div>
        {/* Content Area Starts */}
        <div>
          <div className="flex flex-wrap gap-3 items-center">
            <p className="text-[#A9A9A9]">November 21, 2023</p>
            <Circle size={10} color="#A9A9A9" />
            <p className="text-[#A9A9A9]">1 minute read</p>
          </div>
          {/* Text Content Area Starts */}
          <div className="w-full py-3">
            <p className="text-[#A9A9A9]">
              After completing a professional "Management and Programming of
              Computer Systems" course at my school, I am enthusiastic about
              applying my skills and knowledge in a work setting. I consider
              myself dedicated, ambitious, and selftaught.
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
