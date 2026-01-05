import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl leading-snug">
              The WILDFLOW DEV team helps you build infrastructure the way it should be — simple. 
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              From API connections to full-stack integration, we make your systems work together beautifully — so you can launch faster and grow without limits.
            </p>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image className="rounded-full bg-gray-900" src={PlanetImg} width={400} height={400} alt="Planet" />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image className="absolute -right-64 -top-20 z-10 max-w-none hidden md:block" src={PlanetOverlayImg} width={789} height={755} alt="Planet decoration" />
                  <div>
                    <Image className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500" src={PlanetTagImg01} width={253} height={56} alt="" />
                    <Image className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500" src={PlanetTagImg02} width={241} height={56} alt="" />
                    <Image className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500" src={PlanetTagImg03} width={243} height={56} alt="" />
                    <Image className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500" src={PlanetTagImg04} width={251} height={56} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" /></svg>
                <span>Instant Launch</span>
              </h3>
              <p className="text-[15px] text-gray-400">We build your website/infrastructure so it can be deployed like LEGO — no heavy IT department required.</p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.2-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9Z" /></svg>
                <span>Integration-Ready</span>
              </h3>
              <p className="text-[15px] text-gray-400">Connect your stack to any service. APIs, automations, webhooks — we do the plumbing.</p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" /></svg>
                <span>Full Ownership</span>
              </h3>
              <p className="text-[15px] text-gray-400">Self-host or scale in the cloud. Your infra, your rules, your keys.</p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M10 1a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1Z" /></svg>
                <span>Developer-Friendly</span>
              </h3>
              <p className="text-[15px] text-gray-400">Use your own code, or let us scaffold it. From backend to UI — we’re flexible.</p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M6 2a6 6 0 0 1 12 0v12a6 6 0 0 1-12 0V2Z" /></svg>
                <span>No matter the model</span>
              </h3>
              <p className="text-[15px] text-gray-400">Build for B2B, B2C, E-Commerce, and marketplaces. Whatever you need — we make it work, and we make it beautiful.</p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg className="fill-blue-500" xmlns="http://www.w3.org/2000/svg" width={16} height={16}><path d="M2 2h12v12H2z" /></svg>
                <span>Analytics Included</span>
              </h3>
              <p className="text-[15px] text-gray-400">Understand your systems from day one. Metrics, logs, dashboards — no setup needed.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
