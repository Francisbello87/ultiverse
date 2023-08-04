import Layout from "@/components/Layout";
import Link from "next/link";
import Characters from "@/components/characters";

export default function Home() {
  return (
    // <div className="full-screen-container">
      <Layout>
        <div className="flex bg-image flex-col md:flex-row">
          <aside className="p-4 pr-0 font-custom uppercase my-16">
            <nav className="flex md:flex-col gap-4 overflow-x-auto scrollbar-none text-2xl">
              <Link
                href="#"
                className=" flex items-center gap-2 text-primaryColor"
              >
                <svg
                  width="12"
                  height="33"
                  viewBox="0 0 12 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="6" height="33" fill="#00FFE6" />
                  <rect x="10" width="2" height="33" fill="#00FFE6" />
                </svg>
                Map
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-2 text-secondaryColor"
              >
                <svg
                  width="12"
                  height="33"
                  viewBox="0 0 12 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="6" height="33" fill="white" fill-opacity="0.3" />
                  <rect
                    x="10"
                    width="2"
                    height="33"
                    fill="white"
                    fill-opacity="0.3"
                  />
                </svg>
                Missions
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-2 text-secondaryColor "
              >
                <svg
                  width="12"
                  height="33"
                  viewBox="0 0 12 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="6" height="33" fill="white" fill-opacity="0.3" />
                  <rect
                    x="10"
                    width="2"
                    height="33"
                    fill="white"
                    fill-opacity="0.3"
                  />
                </svg>
                Characters
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-2 text-secondaryColor"
              >
                <svg
                  width="12"
                  height="33"
                  viewBox="0 0 12 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="6" height="33" fill="white" fill-opacity="0.3" />
                  <rect
                    x="10"
                    width="2"
                    height="33"
                    fill="white"
                    fill-opacity="0.3"
                  />
                </svg>
                Loadouts
              </Link>
              <Link
                href="#"
                className=" flex items-center gap-2 text-secondaryColor"
              >
                <svg
                  width="12"
                  height="33"
                  viewBox="0 0 12 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="6" height="33" fill="white" fill-opacity="0.3" />
                  <rect
                    x="10"
                    width="2"
                    height="33"
                    fill="white"
                    fill-opacity="0.3"
                  />
                </svg>
                Events
              </Link>
            </nav>
          </aside>
          <Characters />
        </div>
        <div className=" flex font-custom">
          <span className=" flex gap-2 mr-6">
            <img src="/Rectangle 16.svg" alt="" />
            <img src="/Rectangle 12.svg" alt="" />
            <img src="/Rectangle 13.svg" alt="" />
            <img src="/Rectangle 14.svg" alt="" />
            <img src="/Rectangle 15.svg" alt="" />
          </span>
          <p className=" md:max-w[480px] text-sm md:text-base">
            UTILIZING METAFI, UE5, AND WEB3 TECHNOLOGY TO CREATE A SOCIAL AND
            IMMERSIVE GAMING METAVERSE.
          </p>
        </div>
      </Layout>
    // </div>
  );
}
