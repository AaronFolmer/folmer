import { Header } from "../../layouts/header/__header";
import { NowLayout } from "../../layouts/now/page";


export default function Now() {
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
                <NowLayout />
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
