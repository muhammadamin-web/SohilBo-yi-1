/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import universal from "../../assets/images/location.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Location = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">
          <div
            className="location_card_left"
            data-aos="fade-right"
            data-aos-offset="-200"
          >
            <img src={universal} alt="" className="location_img" />
          </div>
          <div
            className="location_card1"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
            Sohil Boʻyi turar-joy majmuasi Andijonning eng goʻzal va osoyishta hududida joylashgan. Ushbu loyiha daryo boʻyida barpo etilmoqda, u shahar shovqin-suronidan uzoq va tinch muhitda yashashni istaganlar uchun moʻljallangan.            </p>
            <p className="location_text">
            Majmua shaharning ekologik toza hududida, sanoat va transport shovqinidan uzoqda joylashgan. Bu joy atrof-muhit bilan uygʻunlashib, sogʻlom va toza havoda yashash imkonini beradi.            </p>
          </div>
          <div
            className="location_card2"
            data-aos="fade-left"
            data-aos-offset="-200"
          >
            <p className="location_text2">
            Majmua yaqinidagi istirohat bogʻi va yashil maydonlar ham sizning 
            salomatligingiz va farovonligingizni taʼminlaydi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
