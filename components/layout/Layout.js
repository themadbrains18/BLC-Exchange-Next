import SideBar from "@/components/asset/sideBar";

const Layout = ({ children,slug,data }) => {
  return (
    <>
      <div className="flex pt-[120px] flex-col md:flex-row dark:bg-black-v-5 ">
        <SideBar  data={data} slug={slug} />
        { children }
      </div>
    </>
  );
};



export default Layout;
