import "./App.css";

function App() {
  return (
    <>
      <header className="bg-primaryYellow mx-auto  max-w-headerWidth pb-28 pt-10">
        <div className="w-navWidth h-24 rounded-full  mx-auto flex justify-center items-center bg-white w-navWidth ">
          <img src="./src/assets/images/logo.png" alt="" />
        </div>
      </header>
      <main>
        <section className="bg-primaryYellow mx-auto  max-w-headerWidth pb-52">
          <div className="flex justify-center items-center">
            <div>
              <h5 className="uppercase text-yellow-100 text-3xl font-bold">
                risus praesent vulputate.{" "}
              </h5>
              <h1 className="font-bold text-7xl mb-16">
                Cursus Integer <br />
              </h1>

              <div className="flex flex-wrap  gap-4  w-buttonBoxWidth">
                <button className="rounded-full bg-white px-4 text-2xl">
                  Integer Consequat
                </button>
                <button className="rounded-full bg-white px-4 text-2xl">
                  Integer Consequat
                </button>
                <button className="rounded-full bg-white px-4 text-2xl">
                  Aliquot Tristique
                </button>
                <button className="rounded-full bg-white px-4 text-2xl">
                  Pellentesque Tempus
                </button>
                <button className="rounded-full bg-white px-4 text-2xl">
                  Tellus Euismod Pellentesque
                </button>
                <button className="rounded-full bg-white px-4 text-2xl mb-10">
                  Mauris Fermentum Praesent
                </button>

                <button className="rounded-full bg-yellow-300  decoration-black text-5xl px-6 py-3">
                  Lorem Ipsum →
                </button>
              </div>
            </div>
            <img
              src="./src/assets/images/girl.png"
              alt=""
              width={714}
              height={714}
            />
          </div>
        </section>

        <section className="bg-primaryYellow mx-auto  max-w-headerWidth">
          {" "}
          <div className="flex justify-center items-center">
            <div>
              <h4 className="text-5xl decoration-black font-bold mb-16">
                Phasellus a vitae <br /> iaculis magna <br /> eleifend pulvinar
                velit <br /> odio.
              </h4>
              <p
                className="
              text-sm font-bold mb-10"
              >
                Euismod magna id purus eget nunc ligula suspendisse dui netus.{" "}
                <br /> Condimentum blandit rutrum at mauris enim pulvinar duis
                etiam duis vulputate <br />
                et vulputate suspendisse natoque id tellus consectetur pulvinar
                et.{" "}
              </p>
              <button className="rounded-full bg-slate-600 decoration-white text-5xl px-6 py-3">
                Lorem Ipsum →
              </button>
            </div>
            <img src="./src/assets/images/girl2.png" alt="" />
          </div>
        </section>

        <section className="bg-primaryYellow mx-auto bg-gray-500  max-w-headerWidth pt-32">
          <div className="flex justify-center items-center gap-16 mb-48">
            <div>
              <p className="text-yellow-200 font-bold mb-4">
                Quisque porttitor vitae vel amet neque scelerisque <br />{" "}
                mattis. Consectetur nibh velit magna consectetur leo.{" "}
              </p>

              <h4 className="text-5xl text-white font-bold mb-16">
                Cursus Integer <br /> Conseq <br /> Aliquam Tristique.{" "}
              </h4>

              <button className="rounded-full bg-white  decoration-black text-5xl px-6 py-3">
                Lorem Ipsum →
              </button>
            </div>

            <img
              src="./src/assets/images/cards.png"
              alt=""
              width={400}
              height={600}
            />
          </div>

          <div className="flex justify-center">
            <img src=" ./src/assets/images/Testimonials.png" alt="" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
