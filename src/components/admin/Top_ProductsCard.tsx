import { TopProducts } from "src/core/statics/Top_Products";

function TopProductsCard() {
  return (
    <div className="bg-whiteColor h-auto py-5 rounded-lg container w-[1050.67px] shadow-md px-5 sm:w-[400px]">
      <h2 className="text-left pb-6">Top Products</h2>
      <div className="flex flex-col container">
        {TopProducts.map((item, index) => {
          return (
            <>
              <div className="flex justify-between ">
                <div className="flex flex-col ">
                  <p className="">{item.title}</p>
                  <p className="text-[8px] text-gray-400">{item.desc}</p>
                </div>
                <h4 className="">{item.sales}</h4>
              </div>
              {index !== TopProducts.length - 1 && (
                <div className="pt-[1px] container">
                  <hr className="bg-gray-200 border-100 dark:bg-gray-700 w-[1010px] sm:w-[370px]" />
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TopProductsCard;
