function Nav() {
  return (
    <>
      <nav className="h-full w-[15%] bg-zinc-200 flex flex-col items-center ">
        <a
          href="#"
          className="mt-4 mb-2  px-3  text-sm py-2 border rounded border-orange-400 text-orange-400"
        >
          Add New Product
        </a>
        <hr className="w-[80%]  mb-3 border-orange-400" />
        <h1 className="w-[80%] font-bold mb-1">Category Filter</h1>
        <ul className="list-none w-[80%] ">
          <li>
            <span className="inline-block h-[10px] w-[10px] rounded bg-blue-200"></span>{" "}
            cat 1
          </li>
          <li>
            <span className="inline-block h-[10px] w-[10px] rounded bg-orange-300"></span>{" "}
            cat 2
          </li>
          <li>
            <span className="inline-block h-[10px] w-[10px] rounded bg-blue-400"></span>{" "}
            cat 3
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
