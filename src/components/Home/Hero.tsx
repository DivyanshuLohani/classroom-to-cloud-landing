import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export default function HeroSectionCentredWithImage() {
  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl !bg-clip-text text-transparent !bg-cover"
              style={{
                background: "var(--gradient)",
              }}
            >
              Empowering Education, One Institute at a Time
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Transform Your Coaching Institute with Our All-in-One EdTech App
            </p>

            <div className="cursor-pointer mt-10 ">
              <Button
                className="rounded-lg"
                style={{
                  background: "var(--gradient)",
                }}
                size="lg"
              >
                Get your classroom to clould
              </Button>
            </div>
          </div>
          <div className="mt-10 relative max-w-5xl mx-auto">
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="https://placehold.co/1024x480"
                className="rounded-xl"
                alt="Image Description"
              />
            }
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
