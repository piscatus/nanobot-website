import Wrapper from "@/components/Wrapper";
import LinkButton from "@/components/utility/LinkButton";
import HeroImage from "@/components/pages/HeroImage";

export default function Home() {
  return (
    <Wrapper>
      <main>
        <section className="container min-h-screen py-16 -mt-16 grid place-items-center lg:grid-cols-2">
          <div className="max-w-[50ch] grid gap-4">
            <h1 className="font-extrabold text-4xl tracking-tighter leading-10 md:tracking-tight md:text-5xl">
              Integrate Nano
              <br />
              with {""}
              <span className="text-primary animate-color underline">
                everything
              </span>
              <br />
              you need and wish.
            </h1>
            <p className="text-gray md:text-lg">
              The Nano-Focused Multi-Purpose Discord Bot with everything you
              need to use Nano efficiently on your Discord Server.
            </p>
            <div className="flex gap-2 h-10 text-black font-semibold md:h-11 md:text-lg">
              <LinkButton
                classname="bg-tertiary hover:bg-primary"
                href="/features"
              >
                Explore features
              </LinkButton>
              <LinkButton
                classname="bg-secondary hover:bg-primary"
                href="/join"
              >
                Join the community
              </LinkButton>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroImage />
          </div>
        </section>
      </main>
    </Wrapper>
  );
}
