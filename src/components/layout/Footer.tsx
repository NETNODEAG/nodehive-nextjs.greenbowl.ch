export default async function Footer() {
  return (
    <footer className="relative overflow-hidden bg-secondary pb-40 text-white">
      <div className="container-wrapper flex justify-between pt-6">
        <div>
          <p>Stay up to date with our Newsletter</p>
        </div>

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

      <div className="absolute -bottom-[110px] left-0 right-0 transform text-center font-unbounded text-[11rem] font-bold leading-normal">
        Green Bowl
      </div>
    </footer>
  );
}
