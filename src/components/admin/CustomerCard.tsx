import { Customers } from "src/core/statics/CustomersData";

function TopProductsCard() {
  return (
    <div className="bg-whiteColor h-auto py-5 rounded-lg container w-[380.33px] shadow-md px-5 sm:w-[350px]">
      <h2 className="text-left pb-6">Latest Customers</h2>
      <div className="flex flex-col container ">
        {Customers.map((item, index) => {
          return (
            <>
              <div className="flex justify-between ">
                <div
                  className={`${item.Avatar}     bg-cover  w-[30px] h-[30px]  `}
                  key={index}
                ></div>
                <div className="flex flex-col pr-[140px]">
                  <p className="">{item.name}</p>
                  <p className="text-[8px] text-gray-400">{item.email}</p>
                </div>
                <h4 className="">${item.amount}</h4>
              </div>
              {index !== Customers.length - 1 && (
                <div className="pt-[1px] container">
                  <hr className="bg-gray-200 border-100 dark:bg-gray-700 w-[340px] sm:w-[320px]" />
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
