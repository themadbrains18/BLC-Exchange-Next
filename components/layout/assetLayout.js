import SideBar from "@/components/asset/sideBar";

const AssetLayout = ({ children,slug,data }) => {
  return (
    <>
      <div className="flex pt-[100px] flex-col md:flex-row dark:bg-black-v-5 ">
        <SideBar  data={data} slug={slug} />
        { children }
      </div>
    </>
  );
};



export default AssetLayout;
