import { Header } from "../../../layouts/header/__header";
import { Link } from "react-router-dom";

export default function Hobbies() {
  return (
    <>
      <html lang="en">
        <body className="m-auto px-10 lg:w-2/5 xl:w-2/5 sm:w-full">
          <div className="mb-5">
            {/* <!-- ===== Content Area Start ===== --> */}
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              {/* <!-- ===== Header Start ===== --> */}
              <Header />
              {/* <!-- ===== Header End ===== --> */}

              {/* <!-- ===== Main Content Start ===== --> */}
              <main>
                <div className="py-5 flex flex-wrap">
                  <Link to="/folmer">
                    <h2 className="text-[#A9A9A9]">
                      <a>Topics</a>
                    </h2>
                  </Link>
                  <h2 className="text-[#A9A9A9] mx-3">/</h2>
                  <h2 className="text-white">Hobbies</h2>
                </div>
                <div>
                  <div className="text-[#A9A9A9]">
                    <h1 className="text-white">My 'off-time' hobbies</h1>
                    <p className="py-3">
                      Basically my hobbies involves all about learning more
                      about my{" "}
                      <Link to='/topics/learning'>
                        <a className="underline text-white">coding skills</a>
                      </Link>
                      , playing games, hangout with friends, read books, and
                      sometimes watch series.
                    </p>
                  </div>
                </div>

                <section className="flex flex-col">
                  <div className="text-[#A9A9A9]">
                    <p>
                      Two of my favorite games of all time is Cyberpunk 2077 and
                      Bloodborne ( simply because I love the lore, the ambience
                      and environment of gothic and cyberpunk )
                    </p>
                  </div>
                </section>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          <hr />
        </body>
      </html>
    </>
  );
}
