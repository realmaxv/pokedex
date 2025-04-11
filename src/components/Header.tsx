type HeaderProps = {
  changeValue?: string;
  changeHandle?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  nightToggle?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  popupMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

function Header({
  changeValue,
  changeHandle,
  nightToggle,
  popupMenu,
}: HeaderProps) {
  return (
    <header className="flex flex-col p-4 items-center justify-center gap-6 w-full">
      <button className="hover:cursor-pointer" onClick={popupMenu}>
        {" "}
        <img src="./public/image.png" alt="poke_img" />
      </button>
      <div className="flex items-center justify-evenly w-full gap-4 ">
        <img src="./public/menu.png" alt="menu" />
        <input
          value={changeValue}
          onChange={changeHandle}
          type="text"
          className=" rounded-full bg-white px-4 py-1.5"
          placeholder="Search Pokémon"
        />
        <button className="hover:cursor-pointer" onClick={nightToggle}>
          <img src="./public/switch.png" alt="switch" />
        </button>
      </div>
    </header>
  );
}

export default Header;
