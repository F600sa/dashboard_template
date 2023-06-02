import LayoutWithoutSideBar from "src/components/admin/LayoutWithoutSideBar";

export default function Custom404(): JSX.Element {
  return (
    <LayoutWithoutSideBar>
      <div className=" flex flex-col container justify-center items-center ">
        <img src="/assets/images/404.png" alt="Avatar" className="" />
        <div className="text-[50px] font-bold"> Page not found</div>
        <div className=" text-center text-gray-500">
          Oops! Looks like you followed a bad link. If you think this is a
          problem with us, please tell us.
        </div>
        <div className="pt-[20px]">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Go back home
          </button>
        </div>
        <div className="h-[50px]"></div>
      </div>
    </LayoutWithoutSideBar>
  );
}
