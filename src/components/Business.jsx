import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content }) => (
  <div className={`flex flex-row p-6 rounded-[20px] mb-2 feature-card`}>
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col mr-3">
      <h4 className=" font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className=" font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        شما به کارها بپردازید, <br className="sm:block hidden text-justify" /> ما پول را
        مدیریت می‌کنیم.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify`}>
        با کارت اعتباری مناسب، می‌توانید زندگی مالی خود را بهبود بخشیده و با
        ساخت اعتبار، پاداش کسب کنید و پول صرفه‌جویی کنید. اما با وجود صدها کارت
        اعتباری در بازار.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
