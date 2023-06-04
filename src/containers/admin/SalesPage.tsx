import Chart from "src/components/admin/Chart";
import CustomerCard from "src/components/admin/CustomerCard";
import Footer from "src/components/admin/footer";
import NavBar from "src/components/admin/navbar";
import SideBar from "src/components/admin/SideBar";
import TopProductsCard from "src/components/admin/Top_ProductsCard";
import Transactions from "src/components/admin/Transactions";

function SalesPage() {
  return (
    <div className=" flex flex-col bg-gray-100 container">
      <NavBar />
      <div className="h-screen   flex flex-row gap-6 ">
        <div className="sm:hidden pt-1">
          <SideBar />
        </div>
        <div className="flex justify-center gap-5 items-start sm:pt-[400px]  sm:flex-col  ">
          <div className=" flex flex-col sm:pt-[800px] pt-[20px]">
            <div className=" sm:pr-[30px]">
              <Chart />
            </div>
            <div className="flex flex-row pt-[30px] gap-2  sm:flex-col ">
              <CustomerCard />

              <TopProductsCard />
            </div>
            <div className="pt-[50px] sm:w-[350px]">
              <Transactions />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesPage;
