import festive from "../assets/images/festive.svg";

export default function ShopNowBgPic() {
  return (
    <section className="relative max-w-7xl mx-auto w-full  ">
      {/* Background Image */}
      <img
        src={festive}
        alt="HeroImage"
        className="w-full h-full  object-cover"
      />
    </section>
  );
}
