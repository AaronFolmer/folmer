export function Projects() {
  return (
    <main>
      <section>
        <div className="py-5">
          <h2 className="text-[#A9A9A9]">Projects</h2>
        </div>
        {/* Content Area Starts */}
        <div className="flex flex-wrap gap-5 items-center">
          <div className="flex flex-col">
            <ul className="list-none">
              <li className="py-1">
                <p className="text-[#A9A9A9]">2023-//-//</p>
              </li>
              <li className="py-1">
                <p className="text-[#A9A9A9]">2023-//-//</p>
              </li>
              <li className="py-1">
                <p className="text-[#A9A9A9]">2023-08-29</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="list-none">
              <li>
                <h2 className="text-white">
                  <a href="#" target="__blank" className="underline">
                    Juuke
                  </a>
                </h2>
              </li>
              <li>
                <h2 className="text-white">
                  <a href="#" target="__blank" className="underline">
                    m&lt;eet
                  </a>
                </h2>
              </li>
              <li>
                <h2 className="text-white">
                  <a href="https://github.com/AaronFolmer/recipeai" target="__blank" className="underline">
                    RecipeAI
                  </a>
                </h2>
              </li>
              <li>
                <h2 className="text-white">
                  <a href="https://github.com/AaronFolmer/TasteBite" target="__blank" className="underline">
                    Tastebite
                  </a>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
