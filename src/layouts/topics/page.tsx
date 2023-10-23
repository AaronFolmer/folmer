import { Link } from "react-router-dom";

export function Topics() {
  return (
    <>
      <main>
        <section>
          <div>
            <div className="py-5">
              <h2 className="text-[#A9A9A9]">Topics</h2>
            </div>
            {/* Content Area Starts */}
            <div>
              {/* Text Content Area Starts */}
              <div className="w-full">
                <h2 className="flex flex-wrap gap-2">
                  <div>
                    <Link to="/topics/books">
                      <a className="text-white underline">books</a>
                    </Link>
                  </div>
                  <div>
                    <a className="text-white underline">design</a>
                  </div>
                  <div>
                    <a className="text-white underline">habits</a>
                  </div>
                  <div>
                    <Link to="/topics/hobbies">
                      <a className="text-white underline">hobbies</a>
                    </Link>
                  </div>
                  <div>
                    <a className="text-white underline">startups</a>
                  </div>
                  <div>
                    <a className="text-white underline">projects</a>
                  </div>
                  <div>
                    <a className="text-white underline">simplism</a>
                  </div>
                  <div>
                    <Link to="/topics/learning">
                      <a className="text-white underline">learning</a>
                    </Link>
                  </div>
                </h2>
              </div>
              {/* Text Content Area Ends */}
            </div>
            {/* Content Area Ends */}
          </div>
          <div className="py-10">
            <hr />
          </div>
        </section>
      </main>
    </>
  );
}
