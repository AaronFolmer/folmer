import { Header } from "./layouts/header/__header";
import { Latest } from "./layouts/latest/page";
import { Projects } from "./layouts/projects/page";
import { Topics } from "./layouts/topics/page";

export default function Home() {
  return (
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
              <div>
                {/* <!-- ===== Latest Area Start ===== --> */}
                <Latest />
                {/* <!-- ===== Latest Area Ends ===== --> */}
              </div>

              <div>
                {/* <!-- ===== Topics Area Start ===== --> */}
                <Topics />
                {/* <!-- ===== Topics Area Ends ===== --> */}
              </div>

              <div>
                {/* <!-- ===== Projects Area Start ===== --> */}
                <Projects />
                {/* <!-- ===== Projects Area Ends ===== --> */}
              </div>
            </main>
            {/* <!-- ===== Main Content End ===== --> */}
          </div>
          {/* <!-- ===== Content Area End ===== --> */}
        </div>
      </body>
    </html>
  );
}
