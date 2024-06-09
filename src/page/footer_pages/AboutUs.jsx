import React from 'react';
import FooterNavigate from '../../component/common/FooterNavigate';
import homePic from "../../assets/home.jpg";
import deadSea from "../../assets/DeadSea.webp";

export default function AboutUs() {
  return (
    <>
      <FooterNavigate currentPageName="About Us" />
      <div className="flex items-stretch p-5">
        <div className="flex-shrink-0 w-1/2 h-auto">
          <img src={homePic} alt="Home" className="object-cover w-full h-full" />
        </div>
        <div className="flex-1 pl-5">
          <h1 className="mb-2 text-xl font-semibold text-customGold">A perfect harmony of ancient wisdom and science</h1>
          <p className="mb-2 text-customGold">People are our most important asset</p>
          <p className="mb-2">
            Cosmetic™ is a complete beauty care line created to promote the skin’s well being and counteract the effects of aging. Based on wonder working Dead Sea minerals, famous for their remarkable health and beauty benefits, and mixed with innovative Renovage™, Resistem™ and Tightenex™ technology, Aqua Mineral™ revolutionizes traditional skin care solutions by working with your skin's natural powers of recovery, helping it to achieve a naturally healthy glow.
          </p>
          <p>
            In a world increasingly aware of health and environmental protection, Aqua Mineral™ invests both in its human resources and state-of-the-art equipment. Our 300+ dedicated and experienced employees work as a team and are committed to guaranteeing the satisfaction of our customers worldwide.
          </p>
        </div>
      </div>
      {/* Dead Sea Section */}
      <section className="relative bg-cover bg-center text-white m-4" style={{ backgroundImage: `url(${deadSea})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center p-10 w-1/2 mx-auto">
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Dead Sea</h2>
            <p className="text-lg">
              More than 400 meters below sea level and renowned for its extraordinary health benefits, the Dead Sea’s mystical healing and beautifying properties have attracted international tourists for over 5000 years. Considered to be the world’s oldest spa, it has been historically utilized for its extensive healing powers, helping to ease the symptoms of acne, psoriasis and a wide range of other skin conditions. Rich in Dunaliella Salina, an antioxidant-packed algae thriving with beta-carotene, as well as magnesium, sulfur, iodine, calcium and potassium, Dead Sea mud and waters enrich the skin with a plethora of stimulating compounds that protect and renew to ensure beautifully rejuvenated skin. With over 35 unique minerals salts, the Dead Sea’s seemingly endless benefits are scientifically proven to help lessen the appearance of aging, empower your skin with essential minerals and self-healing properties, while enhancing your complexion, allowing this “Fountain of Youth” to timelessly pamper your body and spirit.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
