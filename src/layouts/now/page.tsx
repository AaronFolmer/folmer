import { Circle } from "lucide-react";

export function NowLayout() {
  return (
    <main>
      <section>
        <div className="py-5">
          <h1 className="text-white">What i'm doing now</h1>
        </div>
        <div>
          <p className="text-[#A9A9A9]">
            Fullstack Web Developer in a startup <br />
            Developing an app using web-technologies such as
          </p>
        </div>
        {/* Content Area Starts */}
        <div className="flex flex-wrap gap-5 items-center ml-5 py-5">
          <div className="flex flex-col items-center">
            <ul>
              <li className="flex gap-2 items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">NextJS,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">NodeJS,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">ExpressJS,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">SocketIO,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Typescript and Javascript,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Git and CI/CD pipelines,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Axios,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Google Cloud,</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">RadixUI</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
