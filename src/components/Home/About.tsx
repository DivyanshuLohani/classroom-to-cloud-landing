import { GlobeIcon, TargetIcon, HeartIcon } from "lucide-react";
import React from "react";

export default function About() {
  return (
    <div className="container py-24 lg:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold lg:text-4xl mb-12">About Us</h2>
        <div className="grid gap-32 lg:grid-cols-3">
          {/* Icon Block */}
          <div className="flex flex-col items-center">
            <GlobeIcon className="h-12 w-12" />
            <h3 className="mt-6 text-lg font-semibold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground">
              At ClassroomToCloud, our mission is to revolutionize education
              through innovative technology, making high-quality learning
              accessible to all.
            </p>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex flex-col items-center">
            <TargetIcon className="h-12 w-12 " />
            <h3 className="mt-6 text-lg font-semibold">Our Vision</h3>
            <p className="mt-3 text-muted-foreground">
              We envision a world where every coaching institute can offer
              personalized, high-quality education, enhancing the learning
              experience for students everywhere.
            </p>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex flex-col items-center">
            <HeartIcon className="h-12 w-12 " />
            <h3 className="mt-6 text-lg font-semibold">Our Values</h3>
            <p className="mt-3 text-muted-foreground">
              We believe in integrity, innovation, and inclusivity. These core
              values drive us to create a platform that empowers educators and
              inspires students.
            </p>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
    </div>
  );
}
