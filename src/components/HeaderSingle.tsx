import { Link } from "react-router";

type HeaderProps = {
  nightToggle?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  backEvent?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function HeaderSingle({ nightToggle }: HeaderProps) {
  return (
    <header className="flex flex-col p-4 items-center justify-center gap-6 w-full">
      <img src="/image.png" alt="poke_img" />

      <div className="flex items-center justify-between w-full gap-4 ">
        <Link to={"/"} className="hover:cursor-pointer">
          <img src="/back.png" alt="menu" />
        </Link>

        <button className="hover:cursor-pointer" onClick={nightToggle}>
          <img src="/switch.png" alt="switch" />
        </button>
      </div>
    </header>
  );
}

export default HeaderSingle;
