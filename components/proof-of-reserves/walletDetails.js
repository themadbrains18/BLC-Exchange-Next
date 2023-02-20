import React from "react";
import DataTable from "../snippets/dataTable";

const WalletDetails = () => {
  return (
    <>
      <section className="py-10 md:py-20 dark:bg-black-v-2 ">
        <div className="container">
          <h3 className="section-secondary-heading font-noto font-bold ">
            BLC-Exchange reserve details{" "}
          </h3>
          <DataTable />
        </div>
      </section>
    </>
  );
};

export default WalletDetails;
