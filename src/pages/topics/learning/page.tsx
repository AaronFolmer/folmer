import { Header } from "../../../layouts/header/__header";
import { Link } from "react-router-dom";

export default function Learning() {
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
                  <h2 className="text-white">Learning</h2>
                </div>
                <div>
                  <div className="text-[#A9A9A9]">
                    <p>
                      So in my “off-time”, I always like to spent more time
                      searching and learning about something, for example, i’m
                      always eager to learn more about some new technology.
                    </p>
                  </div>
                </div>

                <section className="py-5 flex flex-col text-[#A9A9A9]">
                  <p>
                    One of the things right now, that i’m interested in learning
                    more, is about arduinos, i’ve never tried to make something
                    with arduino, but one ideia that I have in my mind, is to
                    make a smart mirror, a lot of videos on internet, show how
                    you can do it in your own home, so yeah, it’s pretty simple.
                  </p>
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
