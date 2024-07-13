"use client";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First name is required" })
    .max(100, { message: "First name cannot exceed 100 characters" }),
  lastName: z
    .string()
    .min(1, { message: "Last name is required" })
    .max(100, { message: "Last name cannot exceed 100 characters" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  contactNumber: z
    .string()
    .min(10, { message: "Contact number must be at least 10 digits" })
    .max(15, { message: "Contact number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Contact number can only contain digits" }),
  coachingName: z
    .string()
    .min(1, { message: "Coaching name is required" })
    .max(100, { message: "Coaching name cannot exceed 100 characters" }),
  address: z
    .string()
    .min(1, { message: "Address is required" })
    .max(200, { message: "Address cannot exceed 200 characters" })
    .optional(),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const googleFormData = new FormData();
    googleFormData.append("entry.986079633", values.firstName);
    googleFormData.append("entry.992797385", values.lastName);
    googleFormData.append("entry.374677059", values.email || ""); // optional field
    googleFormData.append("entry.1129264584", values.contactNumber);
    googleFormData.append("entry.550362266", values.coachingName);
    googleFormData.append("entry.1221096006", values.address || "");

    // Google Form submission URL
    const googleFormUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSeMUnc2zd6SLCtRJYTH_nmFHkIcJv8R0BaH7EjX1nqVeqsurA/formResponse";

    const asString = [...googleFormData.entries()]
      .map(
        (x) =>
          `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1] as string)}`
      )
      .join("&");
    // Send POST request to Google Form endpoint using Axios
    await fetch(googleFormUrl + "?" + asString, {
      mode: "no-cors",
      redirect: "follow",
      referrer: "no-referer",
    });

    // Generate WhatsApp message based on form data
    const message = `Hi, I am ${values.firstName}. I want to know more about ClassroomToCloud.`;

    // Replace non-digit characters in phone number for WhatsApp URL
    const phoneNumber = "8252649099";
    const formattedPhone = phoneNumber.replace(/\D/g, "");

    // WhatsApp URL with generated message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp URL in new tab
    window.open(whatsappUrl, "_blank");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
          <Card>
            {/* Card */}
            <CardHeader className="text-center">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Contact now
              </h2>
            </CardHeader>
            <CardContent>
              <div className="mt-5">
                {/* Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="sr-only">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNumber"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="sr-only">Phone Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Phone Number"
                            {...field}
                            type="number"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="coachingName"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel className="sr-only">Coaching Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Coaching Name"
                            className="col-span-2"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button className="mt-3 col-span-2">Get started</Button>
                </div>
                {/* Grid End */}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* End Card */}
      </form>
    </Form>
  );
}
