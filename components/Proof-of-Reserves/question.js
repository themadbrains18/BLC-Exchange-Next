import Image from "next/image";
import Link from "next/link";
import React from "react";

const Question = () => {
  return (
    <>
      <section className="py-10 md:py-20 bg-secondary dark:bg-black-v-2">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="question ">
              <h3 className="section-secondary-heading font-noto">What is proof of reserves?</h3>
              <p className="info-14 font-noto-display md:font-noto md:text-black mt-3 lg:mt-8 lg:max-w-[580px] lg:w-full dark:text-white">
                'Proof of reserves' refers to an auditing procedure that is
                verifiable through cryptographic proofs, checks of public wallet
                ownerships, and recurring audits to certify the holdings of an
                exchange. The custodian provides transparency and proof of the
                existence of on-chain reserves and that the total amounts of
                those coins held and effectively at the disposal of the platform
                exceeds or is equal to the sum of all users' holdings of those
                coins.
                <br />
                 To achieve this, Bitget stores the hash of each user's
                account assets in a leaf node on the Merkle tree. Each user can
                verify that their funds are included in the Merkle tree by
                checking the total amount of users' assets stored in the Merkle
                tree leaf nodes. If the total amount verified is greater than or
                equal to 100%, then the platform has proven that users' funds
                are indeed intact.
                <br />
                 The open source code of the platform's proof
                of its 100% solvency program has been published to GitHub. 
                <br />
                <Link href={"https://github.com/BitgetLimited/proof-of-reserves"} target="_blank">See for yourself</Link>
                
              </p>
            </div>
            <div className="grid place-items-center ">

            <Image className="lg:max-w-[446px] lg:w-full lg:h-96" src={"/assets/images/100percentBanner.png"} width={446} height={360}/>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row gap-12 mt-10">
          <div className="grid place-items-center ">

<Image className="lg:max-w-[446px] lg:w-full lg:h-96" src={"/assets/images/transparencyBanner.png"} width={446} height={360}/>
</div>
            <div className="question">
                
              <h3 className="section-secondary-heading font-noto">
We are committed to maximum transparency</h3>
              <p className="info-14 font-noto-display md:font-noto md:text-black mt-3 lg:mt-8 lg:max-w-[580px] lg:w-fulldark:text-white">
              Bitget's principles are meant to prioritize our users. To ensure the verifiable safety of our users' assets, we will be fully transparent with all our platform's assets.
              </p>
              <ol className="pl-4">
                <li className="list-decimal info-14 font-noto-display md:font-noto md:text-black mt-3 lg:mt-8 lg:max-w-[580px] lg:w-full dark:text-white">Take snapshots monthly and publish all wallet assets of the platform</li>
                <li className="list-decimal info-14 font-noto-display md:font-noto md:text-black mt-1 lg:mt-8 lg:max-w-[580px] lg:w-full dark:text-white">Take snapshots of each user's assets monthly and desensitize for publication</li>
                <li className="list-decimal info-14 font-noto-display md:font-noto md:text-black mt-1 lg:mt-8 lg:max-w-[580px] lg:w-full dark:text-white"> Users can verify their assets in a few simple steps</li>
              </ol>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Question;
