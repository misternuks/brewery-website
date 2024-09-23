export default function Home() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Welcome to Shiokaze Brewery</h1>
        <p className="text-lg ">Discover our beers and visit our bars!</p>
      </div>

      <div id="bars" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Bars</h2>
        <p className="">
          Click on one of the bars below to learn more about them.
        </p>
        {/* Placeholder: We'll replace this with dynamic content */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-md text-center">
            <h3 className="font-bold">Soga Bar</h3>
            <p>Click to learn more about Soga.</p>
          </div>
          <div className="p-4 border rounded-md text-center">
            <h3 className="font-bold">Tateyama Bar</h3>
            <p>Click to learn more about Tateyama.</p>
          </div>
          <div className="p-4 border rounded-md text-center">
            <h3 className="font-bold">Kazusa Bar</h3>
            <p>Click to learn more about Kazusa.</p>
          </div>
        </div>
      </div>

      <div id="beers" className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Beers</h2>
        <p className="">
          See which beers we currently have available on tap and for sale.
        </p>
        {/* Placeholder for beers, will add dynamic content */}
      </div>
    </section>
  );
}
