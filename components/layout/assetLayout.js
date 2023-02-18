import SideBar from "@/components/asset/sideBar";

const AssetLayout = ({ children ,assets }) => {
  return (
    <>
      <div className="flex flex-col md:flex-row dark:bg-black-v-5 ">
        <SideBar  data={assets} slug="asset" />
        { children }
      </div>
    </>
  );
};



export default AssetLayout;
