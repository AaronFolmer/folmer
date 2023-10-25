import { Header } from "../../../layouts/header/__header";
import { BooksComing } from "./books-coming/__books-coming";
import { Link } from "react-router-dom";

export default function Books() {
  return (
    <>
      <html lang="en">
        <body className="m-auto px-10 lg:w-2/5 xl:w-2/5 sm:w-full">
          <div>
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
                  <h2 className="text-white">Books</h2>
                </div>
                <div>
                  <div className="text-[#A9A9A9]">
                    <h1 className="text-white">
                      Books that i'm reading at this moment
                    </h1>
                    <p className="py-3">
                      Some of the themes that I most enjoy to read is specially
                      cyberpunk themes, and tech. Since I was a kid i've always
                      liked this thematic, because of the "super-powers" the
                      technology will bring to us, for example{" "}
                      <a
                        href="https://esperbionics.com/ecosystem/"
                        className="underline text-white"
                      >
                        cyber-prosthetics.
                      </a>
                    </p>
                  </div>
                </div>

                <section className="py-5">
                  <div className="gap-5 flex flex-wrap">
                    <div className="w-1/2">
                      <ul className="text-[#A9A9A9]">
                        <li>
                          <p>The World of Cyberpunk 2077 by</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-white">
                        <li>
                          <p>#Marcin Batylda</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <hr className="my-5" />
                  <div className="gap-5 flex flex-wrap">
                    <div className="w-1/2">
                      <ul className="text-[#A9A9A9]">
                        <li>
                          <p>Neuromancer by</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="text-white">
                        <li>
                          <p>#William Gibson</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </main>
              {/* <!-- ===== Main Content End ===== --> */}
              {/* Books that ill read */}
              <section>
                <BooksComing />
              </section>
            </div>
            {/* <!-- ===== Content Area End ===== --> */}
          </div>
          <hr />
        </body>
      </html>
    </>
  );
}
