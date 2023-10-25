import { Header } from "../../layouts/header/__header";
import { AboutLayout } from "../../layouts/about/page";
import { Elsewhere } from "../../layouts/elsewhere/page";
import { Space } from "../../layouts/space/__space";

export default function About() {
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
                <AboutLayout />
              </div>
              <div>
                <Space />
              </div>
              <div>
                <Elsewhere />
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
