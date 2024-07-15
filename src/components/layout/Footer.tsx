import Newsletter from './Newsletter';

export default async function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary pb-40 text-white">
      <div className="container-wrapper flex justify-between pt-6">
        <Newsletter />

        <div>
          <p>
            Green Bowl Lucerne
            <br />
            Hirschengraben 43
            <br /> 6003 Luzern
            <br /> +41 41 450 10 66
          </p>
        </div>
      </div>

      <div className="absolute -bottom-[30px] left-0 right-0 transform text-center font-unbounded text-5xl font-bold leading-normal xl:-bottom-[110px] xl:text-[11rem]">
        Green Bowl
      </div>
    </footer>
  );
}
