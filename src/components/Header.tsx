type HeaderProps = {
  changeValue?: string;
  changeHandle?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

function Header({ changeValue, changeHandle }: HeaderProps) {
  return (
    <header className="flex flex-col p-4 items-center justify-center gap-6 w-full">
      <img src="./public/image.png" alt="poke_img" />
      <div className="flex items-center justify-evenly w-full gap-4 ">
        <img src="./public/menu.png" alt="menu" />
        <input
          value={changeValue}
          onChange={changeHandle}
          type="text"
          className=" rounded-full bg-white px-4 py-1.5"
          placeholder="Search Pokemon"
        />
        <img src="./public/switch.png" alt="switch" />
      </div>
    </header>
  );
}

export default Header;
