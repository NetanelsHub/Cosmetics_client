import React from 'react'
import FooterNavigate from '../../component/common/FooterNavigate'



const PrivacyPolicy = () => {
  return (
    <>
    <FooterNavigate currentPageName="Privacy Policy" />
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Before you begin setting up your account with <a href="www.aquamineralspa.com" className="text-blue-500">www.aquamineralspa.com</a> (herein referred to as “we,” “us,” or “Nevita Ltd”), please read the following Privacy Policy. By using or downloading information from our Web site, you represent that you have read and understand this Policy and agree to be bound by it. If you do not agree with this Policy, in whole or in part, please do not continue to use this Web site.
      </p>
      <ol className="list-decimal ml-8 space-y-2">
        <li>We are committed to protecting your privacy.</li>
        <li>
          When you create an account with our Web-Site, you need to provide some personal information, such as your name, email address, and mailing address. We protect and use this information as set forth in our Privacy Policy.
        </li>
        <li>
          If you choose to provide us with your personal information on the web, we may transfer that information within ourselves or to our third-party service providers anywhere in this world.
        </li>
        <li>
          We use this information to:
          <ol className="list-decimal ml-8 space-y-2">
            <li>Improve and customize the content and layout of the site and other materials.</li>
            <li>Notify you of updates to the site.</li>
            <li>Notify you of relevant properties and services.</li>
            <li>Notify you of upcoming events and programs.</li>
            <li>Notify you of promotional material and miscellaneous operations.</li>
            <li>Notify you of any services and products provided by us or by third parties that we think may be of interest to you.</li>
            <li>For sending you our newsletter, which is an integral part of the service we provide.</li>
          </ol>
        </li>
        <li>
          We shall not sell or receive payment for licensing or disclosing your personal information. We will not rent or sell your personally identifying information to other companies or individuals, unless we have your consent. We may share such information in any of the following limited circumstances:
          <ol className="list-decimal ml-8 space-y-2">
            <li>We have your consent or your request to do so.</li>
            <li>We are required to do so by law.</li>
            <li>We have a good faith belief that access, preservation or disclosure of such information is reasonably necessary to protect the rights, property or safety of Nevita Ltd, its Users or the public.</li>
          </ol>
        </li>
        <li>
          Credit information that you and credit authorizers provide when you make payments by credit card or electronic check for products, dues or other services via the site will only be used to process the transactions you request.
        </li>
        <li>
          Use of Cookies - A "cookie" is a small piece of information sent by a Web server to store in a Web browser so that it can later be read back from that browser. We may use cookies to store some personal preferences for your future visits. Cookies allow us to recognize you more quickly; therefore, your time spent on our site can be more personalized and productive. You'll find that cookies are an industry standard and are used at most major Web sites in much the same way we use them here at our Site.
        </li>
        <li>
          While we cannot guarantee privacy perfection, we will address any issue to the best of our abilities as soon as possible.
        </li>
        <li>
          By using the Site, you consent to the terms of this privacy policy and our processing of personal information for the purposes given above as well as those explained where we collect personal information on the Site.
        </li>
      </ol>
    </div>
    </>
  );
};

export default PrivacyPolicy;

