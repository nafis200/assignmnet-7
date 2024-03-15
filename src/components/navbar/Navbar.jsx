import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className=" ml-4 mr-4">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Recipe</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li><a>Search</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-2xl font-bold">Recipe <span className="">Calories</span></a>
        </div>
        <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <a>Recipe</a>
      </li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
        <div className="navbar-end">
        <label class="input input-bordered flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="lg:w-4 lg:h-4 opacity-70"><path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" /></svg>
        <input type="text" className="grow w-20 lg:w-32 " placeholder="Search" />
  
</label>
        </div>
        <MdAccountCircle className="text-5xl ml-2 bg-green-400"></MdAccountCircle>
      </div>
       
    </div>
  );
};

export default Navbar;
