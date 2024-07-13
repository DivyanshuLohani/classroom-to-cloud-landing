import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CheckIcon, MinusIcon } from "lucide-react";
import React from "react";

interface PlanFeature {
  type: string;
  features: {
    name: string;
    basic: boolean;
    premium: boolean;
  }[];
}

const planFeatures: PlanFeature[] = [
  {
    type: "Customization",
    features: [
      { name: "Custom Logo & Branding", basic: true, premium: true },
      { name: "Custom Domain", basic: false, premium: true },
      { name: "Custom color scheme", basic: false, premium: true },
      { name: "No our branding", basic: false, premium: true },
    ],
  },
  {
    type: "Content Management",
    features: [
      { name: "Course Management", basic: true, premium: true },
      { name: "Lesson Scheduling", basic: true, premium: true },
      { name: "Video Hosting", basic: false, premium: true },
      { name: "Notes", basic: true, premium: true },
      { name: "Interactive Quizzes", basic: false, premium: true },
    ],
  },
  {
    type: "Student Management",
    features: [
      { name: "Student Enrollment", basic: true, premium: true },
      { name: "Attendance Tracking", basic: false, premium: true },
      { name: "Performance Analytics", basic: false, premium: true },
    ],
  },
];

export default function PricingSectionCards() {
  return (
    <>
      {/* Pricing */}
      <div className="container py-24 lg:py-32">
        {/* Title */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Pricing
          </h2>
          <p className="mt-1 text-muted-foreground">
            Whatever your status, our offers evolve according to your needs.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:items-center">
          {/* Basic Card */}
          <Card>
            <CardHeader className="text-center pb-2">
              <CardTitle className="mb-7">Basic</CardTitle>
              <span className="font-bold text-5xl">
                ₹3499 <span className="text-2xl">+ ₹999/month</span>
              </span>
            </CardHeader>
            <CardDescription className="text-center">
              Essential features for small coaching institutes
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Custom Logo & Branding
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Course Management
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Lesson Scheduling
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Notes</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Get Quote
              </Button>
            </CardFooter>
          </Card>
          {/* End Basic Card */}
          {/* Premium Card */}
          <Card className="border-primary">
            <CardHeader className="text-center pb-2">
              <Badge className="uppercase w-max self-center mb-3">
                Most popular
              </Badge>
              <CardTitle className="!mb-7">Premium</CardTitle>
              <span className="font-bold text-5xl">
                ₹5499 <span className="text-2xl">+ ₹2500/month</span>
              </span>
            </CardHeader>
            <CardDescription className="text-center w-11/12 mx-auto">
              Advanced features for growing institutes
            </CardDescription>
            <CardContent>
              <ul className="mt-7 space-y-2.5 text-sm">
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Custom Logo & Branding
                  </span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Custom Domain</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Interactive Quizzes
                  </span>
                </li>

                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Video Lectures</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">Live Classes</span>
                </li>
                <li className="flex space-x-2">
                  <CheckIcon className="flex-shrink-0 mt-0.5 h-4 w-4" />
                  <span className="text-muted-foreground">
                    Better Tooling for questions
                  </span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Get Quote</Button>
            </CardFooter>
          </Card>
          {/* End Premium Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Pricing */}
      {/* Feature Table */}
      <div className="container">
        <div className="lg:text-center mb-10 lg:mb-20">
          <h3 className="text-2xl font-semibold dark:text-white">
            Compare plans
          </h3>
        </div>
        <Table className="hidden lg:table">
          <TableHeader>
            <TableRow className="bg-muted hover:bg-muted">
              <TableHead className="w-3/12 text-primary">Plans</TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Basic
              </TableHead>
              <TableHead className="w-2/12 text-primary text-lg font-medium text-center">
                Premium
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planFeatures.map((featureType, i) => (
              <React.Fragment key={i}>
                <TableRow className="bg-muted/50" key={featureType.type}>
                  <TableCell colSpan={5} className="font-bold">
                    {featureType.type}
                  </TableCell>
                </TableRow>
                {featureType.features.map((feature, i) => (
                  <TableRow key={i} className="text-muted-foreground">
                    <TableCell>{feature.name}</TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.basic ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="mx-auto w-min">
                        {feature.premium ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>

        <div className="space-y-24 lg:hidden">
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Basic</h4>
            </div>
            <Table>
              {planFeatures.map((featureType, i) => (
                <TableBody key={i}>
                  <TableRow className="bg-muted hover:bg-muted">
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature, i) => (
                    <TableRow className="text-muted-foreground" key={i}>
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.basic ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
          <section>
            <div className="mb-4">
              <h4 className="text-xl font-medium">Premium</h4>
            </div>
            <Table>
              {planFeatures.map((featureType, i) => (
                <TableBody key={i}>
                  <TableRow className="bg-muted hover:bg-muted">
                    <TableCell
                      colSpan={2}
                      className="w-10/12 text-primary font-bold"
                    >
                      {featureType.type}
                    </TableCell>
                  </TableRow>
                  {featureType.features.map((feature, i) => (
                    <TableRow className="text-muted-foreground" key={i}>
                      <TableCell className="w-11/12">{feature.name}</TableCell>
                      <TableCell className="text-right">
                        {feature.premium ? (
                          <CheckIcon className="h-5 w-5" />
                        ) : (
                          <MinusIcon className="h-5 w-5" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ))}
            </Table>
          </section>
        </div>
        {/* End xs to lg */}

        {/* End Comparison table */}
      </div>
      {/* End Feature Table */}
    </>
  );
}
