import React from "react";
import FooterNavigate from "../component/common/FooterNavigate";

export default function TankYou() {
  return (
    <>
      <FooterNavigate currentPageName={"Tank You"} />
      <div className="text-black shadow-md font-sans max-w-lg mx-auto py-6 px-6 mt-5 mb-5">
        <div className="border-b border-gray-600 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-yellow-400">Thank you</h1>
        </div>
        <p className="mb-4">
          Minerals Cosmetic would like to thank you very much for shopping with
          us and trusting in our products.
        </p>
        <p className="mb-4">
          In order to continue growing and improving our services, we need your
          opinion. Please leave us a comment on Google. It won't take you more
          than a minute and you will be doing us a big favor.
        </p>
        <p className="mb-4">
          We are at your disposal for any questions or suggestions. Once again,
          thank you very much.
        </p>
        <p className="mt-8">
          Yours sincerely,
          <br />
          Minerals Cosmetic
        </p>
        <div className="mt-8 flex justify-between items-center">
          <div>
            <p className="mb-2">Instagram: @MineralsCosmetic</p>
            <p className="mb-2">Twitter: @MineralsCosmetic</p>
            <p className="mb-2">Facebook: /MineralsCosmetic</p>
          </div>
          <div className="text-right">
            <p> St, Mego</p>
            <p>CA 92103</p>
            <p>(972) 050-7499663</p>
          </div>
        </div>
      </div>
    </>
  );
}
