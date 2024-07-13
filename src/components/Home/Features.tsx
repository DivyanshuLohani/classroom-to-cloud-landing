import {
  TabletSmartphoneIcon,
  ClipboardList,
  Package,
  HandHelping,
} from "lucide-react";

export default function Features() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <h2 className="text-center text-3xl font-bold mb-20">
          Why Choose Classroom to Cloud
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <TabletSmartphoneIcon className="flex-shrink-0 w-8 h-8  text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Your own app</h3>
              <p className="mt-1 text-muted-foreground">
                Full branding app for your own app and will be a complete app
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <ClipboardList className="flex-shrink-0 w-8 h-8  text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Organization</h3>
              <p className="mt-1 text-muted-foreground">
                Your lectures, dpps and notes are organised in proper ways with
                every chapter and subject
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <Package className="flex-shrink-0 w-8 h-8 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">Feature Rich</h3>
              <p className="mt-1 text-muted-foreground">
                Features that you will not find in any of our competitors
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="text-center">
            <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
              <HandHelping className="flex-shrink-0 w-8 h-8 text-primary-foreground" />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-semibold ">User Friendly</h3>
              <p className="mt-1 text-muted-foreground">
                Our app is not only at best prices but also very easy to use
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
