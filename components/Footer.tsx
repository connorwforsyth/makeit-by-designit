import Link from "next/link";
import AboriginalFlag from "./Icons/AboriginalFlag";
import TorresFlag from "./Icons/TorrensFlag";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="flex w-full flex-col gap-4 border-t border-gray-400 bg-neutral-900 px-4 py-8 backdrop-blur-md
    md:flex-row md:gap-16 md:px-12 md:pb-16 md:pt-8"
    >
      <div className="flex max-w-sm flex-col gap-4">
        <div className="flex h-4 items-center gap-2">
          <Image
            alt="Makeit Logo From Designit"
            width="70"
            height="100"
            className="h-auto w-auto"
            src="/makeit.svg"
          ></Image>
          <p>— by Designit</p>
        </div>
        <p className="text-designit-gray">
          Makeit is a venture project by Designit, a Wipro company, created by
          our Australian studios.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="flex h-4 gap-4 text-designit-gray ">
          {/* Note to self: Whats the best way to include alt tags when using svg icons for nextjs Link tag? */}
          <Link
            className="transition hover:text-white"
            href="https://x.com/designit"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1629 1.5H14.3691L9.55039 7.00625L15.2191 14.5H10.7816L7.30352 9.95625L3.32852 14.5H1.11914L6.27227 8.60938L0.837891 1.5H5.38789L8.52852 5.65312L12.1629 1.5ZM11.3879 13.1812H12.6098L4.72227 2.75H3.40977L11.3879 13.1812Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            className="transition hover:text-white"
            href="https://www.facebook.com/SocialDesignit"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_447_89785)">
                <path
                  d="M16 8C16 3.58125 12.4187 0 8 0C3.58125 0 0 3.58125 0 8C0 11.75 2.58437 14.9 6.06875 15.7656V10.4438H4.41875V8H6.06875V6.94688C6.06875 4.225 7.3 2.9625 9.975 2.9625C10.4813 2.9625 11.3562 3.0625 11.7156 3.1625V5.375C11.5281 5.35625 11.2 5.34375 10.7906 5.34375C9.47812 5.34375 8.97188 5.84062 8.97188 7.13125V8H11.5844L11.1344 10.4438H8.96875V15.9406C12.9312 15.4625 16 12.0906 16 8Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_447_89785">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            className="transition hover:text-white"
            href="https://linkedin.com/company/designit"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.13438 14H0.23125V4.65312H3.13438V14ZM1.68125 3.37812C0.753125 3.37812 0 2.60938 0 1.68125C0 1.23535 0.177131 0.807722 0.492427 0.492427C0.807722 0.177131 1.23535 0 1.68125 0C2.12715 0 2.55478 0.177131 2.87007 0.492427C3.18537 0.807722 3.3625 1.23535 3.3625 1.68125C3.3625 2.60938 2.60938 3.37812 1.68125 3.37812ZM13.9969 14H11.1V9.45C11.1 8.36562 11.0781 6.975 9.59062 6.975C8.08125 6.975 7.85 8.15312 7.85 9.37187V14H4.95V4.65312H7.73438V5.92812H7.775C8.1625 5.19375 9.10938 4.41875 10.5219 4.41875C13.4594 4.41875 14 6.35313 14 8.86563V14H13.9969Z"
                fill="currentColor"
              />
            </svg>
          </Link>
          <Link
            className="transition hover:text-white"
            href="https://threads.net/designit"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_447_89789)">
                <path
                  d="M10.3594 7.36562C10.4281 7.39375 10.4906 7.425 10.5562 7.45312C11.4688 7.89375 12.1375 8.55312 12.4875 9.37187C12.9781 10.5125 13.025 12.3656 11.5406 13.8469C10.4094 14.9781 9.03125 15.4875 7.08437 15.5031H7.075C4.88125 15.4875 3.19688 14.75 2.0625 13.3094C1.05313 12.0281 0.534375 10.2437 0.515625 8.00937V8V7.99375C0.53125 5.75938 1.05 3.975 2.05938 2.69375C3.19375 1.25312 4.88125 0.515625 7.075 0.5H7.08437C9.28125 0.515625 10.9875 1.25 12.1562 2.68438C12.7312 3.39375 13.1562 4.24688 13.425 5.2375L12.1625 5.575C11.9406 4.76875 11.6062 4.08125 11.1562 3.53125C10.2437 2.4125 8.875 1.8375 7.07812 1.825C5.29688 1.84063 3.95 2.4125 3.07188 3.525C2.25313 4.56563 1.82812 6.07188 1.8125 8C1.82812 9.92813 2.25313 11.4344 3.07188 12.4781C3.94688 13.5906 5.29688 14.1625 7.07812 14.1781C8.68437 14.1656 9.74688 13.7844 10.6313 12.9C11.6406 11.8937 11.6219 10.6562 11.3 9.90312C11.1094 9.45937 10.7656 9.09062 10.3031 8.8125C10.1875 9.65312 9.93437 10.3219 9.53125 10.8375C8.99687 11.5187 8.2375 11.8875 7.25938 11.9406C6.52187 11.9812 5.8125 11.8031 5.2625 11.4406C4.6125 11.0094 4.23125 10.3531 4.19063 9.5875C4.1125 8.07812 5.30625 6.99375 7.16563 6.8875C7.825 6.85 8.44375 6.87812 9.01562 6.975C8.94063 6.5125 8.7875 6.14375 8.55937 5.875C8.24687 5.50938 7.75938 5.32188 7.11562 5.31875H7.09375C6.575 5.31875 5.875 5.4625 5.42812 6.14062L4.35313 5.40312C4.95312 4.49375 5.925 3.99375 7.09688 3.99375H7.12187C9.07812 4.00625 10.2438 5.22813 10.3625 7.35938L10.3562 7.36562H10.3594ZM5.48438 9.51562C5.525 10.3 6.37188 10.6656 7.19063 10.6187C7.99063 10.575 8.89688 10.2625 9.05 8.33125C8.6375 8.24063 8.18125 8.19375 7.69375 8.19375C7.54375 8.19375 7.39375 8.19688 7.24375 8.20625C5.90312 8.28125 5.45625 8.93125 5.4875 9.5125L5.48438 9.51562Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="clip0_447_89789">
                  <rect width="14" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link
            className="transition hover:text-white"
            href="https://instagram.com/designit"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_447_89791)">
                <path
                  d="M7.00352 4.40781C5.01602 4.40781 3.41289 6.01094 3.41289 7.99844C3.41289 9.98594 5.01602 11.5891 7.00352 11.5891C8.99102 11.5891 10.5941 9.98594 10.5941 7.99844C10.5941 6.01094 8.99102 4.40781 7.00352 4.40781ZM7.00352 10.3328C5.71914 10.3328 4.66914 9.28594 4.66914 7.99844C4.66914 6.71094 5.71602 5.66406 7.00352 5.66406C8.29102 5.66406 9.33789 6.71094 9.33789 7.99844C9.33789 9.28594 8.28789 10.3328 7.00352 10.3328ZM11.5785 4.26094C11.5785 4.72656 11.2035 5.09844 10.741 5.09844C10.2754 5.09844 9.90352 4.72344 9.90352 4.26094C9.90352 3.79844 10.2785 3.42344 10.741 3.42344C11.2035 3.42344 11.5785 3.79844 11.5785 4.26094ZM13.9566 5.11094C13.9035 3.98906 13.6473 2.99531 12.8254 2.17656C12.0066 1.35781 11.0129 1.10156 9.89102 1.04531C8.73477 0.979688 5.26914 0.979688 4.11289 1.04531C2.99414 1.09844 2.00039 1.35469 1.17852 2.17344C0.356641 2.99219 0.103516 3.98594 0.0472656 5.10781C-0.0183594 6.26406 -0.0183594 9.72969 0.0472656 10.8859C0.100391 12.0078 0.356641 13.0016 1.17852 13.8203C2.00039 14.6391 2.99102 14.8953 4.11289 14.9516C5.26914 15.0172 8.73477 15.0172 9.89102 14.9516C11.0129 14.8984 12.0066 14.6422 12.8254 13.8203C13.6441 13.0016 13.9004 12.0078 13.9566 10.8859C14.0223 9.72969 14.0223 6.26719 13.9566 5.11094ZM12.4629 12.1266C12.2191 12.7391 11.7473 13.2109 11.1316 13.4578C10.2098 13.8234 8.02227 13.7391 7.00352 13.7391C5.98477 13.7391 3.79414 13.8203 2.87539 13.4578C2.26289 13.2141 1.79102 12.7422 1.54414 12.1266C1.17852 11.2047 1.26289 9.01719 1.26289 7.99844C1.26289 6.97969 1.18164 4.78906 1.54414 3.87031C1.78789 3.25781 2.25977 2.78594 2.87539 2.53906C3.79727 2.17344 5.98477 2.25781 7.00352 2.25781C8.02227 2.25781 10.2129 2.17656 11.1316 2.53906C11.7441 2.78281 12.216 3.25469 12.4629 3.87031C12.8285 4.79219 12.7441 6.97969 12.7441 7.99844C12.7441 9.01719 12.8285 11.2078 12.4629 12.1266Z"
                  fill="currentColor"
                />
              </g>
            </svg>
          </Link>
        </ul>
        <Link
          className="flex text-designit-gray transition hover:text-white hover:underline"
          href="https://www.designit.com"
        >
          Designit.com
        </Link>
      </div>
      <div className="hidden lg:flex lg:flex-grow"></div>
      <div className="flex max-w-xl flex-col gap-4 text-designit-gray">
        <p>
          Designit acknowledges the Traditional Custodians of the lands on which
          we work and pay our respects to their Elders past, present and
          emerging.
        </p>
        <div className="flex gap-1">
          <AboriginalFlag />
          <TorresFlag />
        </div>
      </div>
    </footer>
  );
}
