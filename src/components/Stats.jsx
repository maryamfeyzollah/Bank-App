import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 text-justify`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className=" font-semibold xs:text-[40px] text-[30px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}
        </h4>
        <p className=" font-normal xs:text-[20px] text-[15px] xs:leading-[26.58px] leading-[21.58px] text-gradient mr-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
