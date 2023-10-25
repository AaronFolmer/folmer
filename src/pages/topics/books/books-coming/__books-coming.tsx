export function BooksComing() {
  return (
    <main className="mt-20">
      <section>
        <div>
          <div className="text-[#A9A9A9]">
            <h1 className="text-white">Books that i'll probably read</h1>
            <p className="py-3">
              That's a lot of books in my bookmarks to read, if you want to know
              ALL the books that i'll read, you can go to my profile in{" "}
              <a
                href="https://oku.club/user/aaronfolmer/collection/to-read"
                target="_blank"
                className="underline text-white"
              >
                oku
              </a>, but i'll show the top ones that i'll read first.
            </p>
          </div>
        </div>

        <section className="py-5">
          <div className="gap-5 flex flex-wrap">
            <div className="w-1/2">
              <ul className="text-[#A9A9A9]">
                <li>
                  <p>Chart-22 by</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white">
                <li>
                  <p>#Joseph Heller</p>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-5" />
          <div className="gap-5 flex flex-wrap">
            <div className="w-1/2">
              <ul className="text-[#A9A9A9]">
                <li>
                  <p>Eden It's an Endless World! by</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-white">
                <li>
                  <p>#Hiroki Endou</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
