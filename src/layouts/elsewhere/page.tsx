import { Circle, MoveUpRightIcon } from "lucide-react";

export function Elsewhere() {
  return (
    <main>
      <section>
        <div className="py-5">
          <h1 className="text-white">Elsewhere</h1>
        </div>
        {/* Content Area Starts */}
        <div className="flex flex-wrap gap-5 items-center ml-5">
          <div className="flex flex-col items-center">
            <ul>
              <li className="flex gap-2 items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Twitter:</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Github:</p>
              </li>
              <li className="flex gap-2  items-center">
                <Circle size={10} color="#A9A9A9" />
                <p className="text-[#A9A9A9]">Linkedin:</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul>
              <li className="flex gap-1 items-center">
                <p className="text-white">
                  <a href="https://twitter.com/FolmerAaron" target="__blank" className="underline">
                    @FolmerAaron
                  </a>
                </p>
                <MoveUpRightIcon size={15} color="#A9A9A9" />
              </li>
              <li className="flex gap-1 items-center">
                <p className="text-white">
                  <a href="https://github.com/AaronFolmer" target="__blank" className="underline">
                    @aaronfolmer
                  </a>
                </p>
                <MoveUpRightIcon size={15} color="#A9A9A9" />
              </li>
              <li className="flex gap-1 items-center">
                <p className="text-white">
                  <a href="https://www.linkedin.com/in/aaron-folmer-a03bb419b/" target="__blank" className="underline">
                    @aaron-folmer
                  </a>
                </p>
                <MoveUpRightIcon size={15} color="#A9A9A9" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
