import { Link } from "react-router-dom";

export function Header() {
  return (
    <section>
      <div className="flex flex-wrap items-center justify-between py-10">
        <h1>
          <Link to="/">
            <a className="text-white">f/olmer</a>
          </Link>
        </h1>
        <div>
          <ul className="flex flex-wrap gap-5">
            <li>
              <Link to="/about">
                <h2>
                  <a className="text-[#A9A9A9]">About</a>
                </h2>
              </Link>
            </li>
            <li>
              <div className="h-full border-l-[1px] border-[#A9A9A9]" />
            </li>
            <li>
              <Link to="/now">
                <h2>
                  <a className="text-[#A9A9A9]">Now</a>
                </h2>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
