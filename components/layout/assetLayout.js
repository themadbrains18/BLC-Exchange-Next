import SideBar from "@/components/asset/sideBar";

const AssetLayout = ({ children ,assets }) => {
  return (
    <>
      <section className="p-3 md:p-5 pt-[180px] flex flex-col md:flex-row dark:bg-black-v-5 ">
        <SideBar  data={assets} slug="asset" />
        { children }
      </section>
    </>
  );
};



export default AssetLayout;
