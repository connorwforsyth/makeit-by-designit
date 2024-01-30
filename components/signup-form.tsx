"use client";
import { cn } from "@/lib/utils";
import Arrow from "./Icons/Arrow";
import Globe from "./Icons/globe";
import * as Form from "@radix-ui/react-form";
import React from "react";
import { useState } from "react";
import motion from "framer-motion";
import { Toaster, toast } from "sonner";

const promise = () =>
  new Promise((resolve) => setTimeout(() => resolve({ name: "Sonner" }), 2000));

function SignupForm() {
  // React State to handle multistep form.

  let [formStep, setFormStep] = React.useState(0);

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(e.currentTarget);

    const body = {
      Name: formData.get("name"),
      Company: formData.get("company"),
      Challenge: formData.get("challenge"),
      Email: formData.get("email"),
      Phone: formData.get("phone"),
    };

    console.log(body);

    const fetchPromise = fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    toast.promise(fetchPromise, {
      loading: "Loading...",
      success: (data) => {
        setFormStep(2);
        return `Thanks, your submission has been added.`;
      },
      error: "Error when submitting form.",
    });
  };

  return (
    <Form.Root
      onSubmit={handleForm}
      className="flex w-full flex-col gap-8 text-left placeholder:text-gray-300 "
    >
      {/* Form step 1 */}
      <div
        className={cn("flex w-full flex-col gap-10", {
          hidden: formStep === 1 || formStep === 2,
        })}
      >
        {/* <div className="flex justify-end">
          <button
            onClick={() => setFormStep(1)}
            className="group relative flex items-center justify-center gap-2 overflow-clip rounded-full border-2 border-designit-gray px-4 py-2 text-xl transition-all  hover:text-black"
          >
            <div className="absolute right-full -z-10 h-full w-full bg-white transition-all group-hover:right-0" />
            Next
          </button>
        </div> */}
        {/* Name Field */}
        <Form.Field name="name" className="flex gap-6 bg-transparent">
          <Form.Label className="text-5xl">My name is</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
                className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
                type="text"
              name="name"
              placeholder="your name"
            />
          </Form.Control>
        </Form.Field>

        {/* Company Field */}
        <Form.Field name="company" className="flex gap-6 bg-transparent">
          <Form.Label className="text-5xl">from</Form.Label>
            <Form.Control asChild className="flex flex-grow">
              <input
                type="text"
                name="company"
                placeholder="your company"
                required
                className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white selection:bg-transparent autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
                />
            </Form.Control>
              <Form.Message
                match="valueMissing"
                className="font-semi-bold inline rounded-lg px-2 text-sm text-red-300"
              >
                Please enter your company name
              </Form.Message>
        </Form.Field>

        {/* Challenge Field */}
        <Form.Field name="challenge" className="flex flex-col gap-6">
          <Form.Label className="text-5xl">and my challenge is...</Form.Label>
          <Form.Control asChild className="flex flex-grow">
              <input
                type="text"
                name="challenge"
                placeholder="incorporating a sustainability focused offering for our subscribers..."
                required
                className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white selection:bg-transparent autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
                />
            </Form.Control>
        </Form.Field>
        {/* Continue Button */}
        <div className="flex w-full flex-grow justify-center mt-14">
          <button
            type="button"
            onClick={() => setFormStep(1)}
            className="group relative flex items-center justify-center gap-8 overflow-clip rounded-full border-2 py-8 text-6xl transition-all hover:text-black focus:text-black px-16 ease-in-out duration-500"
          >
            <div className="absolute right-full -z-10 h-full w-full bg-white transition-all group-hover:right-0 group-focus:right-0 ease-in-out duration-500" />
            Continue <Arrow className="h-auto w-16" />
          </button>
        </div>
      </div>
      {/* Form step 2 */}
      <div
        className={cn("flex w-full flex-col gap-4", {
          hidden: formStep === 0 || formStep === 2,
        })}
      >
        <div className="flex">
          <button
            type="button"
            onClick={() => setFormStep(0)}
            className="group relative flex items-center justify-center gap-2 overflow-clip rounded-full border-2 border-designit-gray px-4 py-2 text-xl transition-all hover:text-black focus:text-black"
          >
            <div className="absolute right-full -z-10 h-full w-full bg-white transition-all group-hover:right-0 group-focus:right-0" />
            Back
          </button>
        </div>
        {/* Session Field */}
        <Form.Field name="email" className="flex gap-6">
          <Form.Label className="text-5xl">Our preferred session is on</Form.Label>
          <div className="flex flex-grow flex-col gap-0.5">
            <Form.Control asChild className="flex flex-grow">
              <input
                type="text"
                name="session"
                placeholder="select date"
                required
                className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white selection:bg-transparent autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
                />
            </Form.Control>
          </div>
        </Form.Field>
        {/* Email Field */}
        <Form.Field name="email" className="flex gap-6">
          <Form.Label className="text-5xl">Contact me by email</Form.Label>
          <div className="flex flex-grow flex-col gap-0.5">
            <Form.Control asChild className="flex flex-grow">
              <input
                type="email"
                name="email"
                placeholder="you@yours.com"
                required
                className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white selection:bg-transparent autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
                />
            </Form.Control>
            <div>
              <Form.Message
                match="valueMissing"
                className="inline rounded-lg px-2 text-sm font-medium text-red-300"
              >
                Please enter your email.
              </Form.Message>
              <Form.Message
                match="typeMismatch"
                className="font-semi-bold inline rounded-lg px-2 text-sm text-red-300"
              >
                Please enter a vaild email.
              </Form.Message>
              <div className="w-full"></div>
            </div>
          </div>
        </Form.Field>
        {/* Phone Field */}
        <Form.Field name="phone" className="flex gap-6">
          <Form.Label className="text-5xl">or by phone</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="tel"
              name="phone"
              placeholder="+61"
              className="px-1 appearance-none rounded-none border-b border-designit-gray bg-transparent text-2xl shadow-white selection:bg-transparent autofill:bg-transparent focus:border-b-white hover:border-b-white transition ease-in-out;"
              />
          </Form.Control>
        </Form.Field>
        {/* Submit Button */}
        <div className="flex w-full flex-grow justify-center mt-14">
          <Form.Submit
            type="submit"
            className="group relative flex items-center justify-center gap-8 overflow-clip rounded-full border-2 py-8 text-6xl transition-all hover:text-black focus:text-black px-16 ease-in-out duration-500"
          >
            <div className="absolute right-full -z-10 h-full w-full bg-white transition-all group-hover:right-0 group-focus:right-0 ease-in-out duration-500" />
              Send <Arrow className="h-auto w-16" />
          </Form.Submit>
        </div>
      </div>
      {/* Step 3 submitted */}
      <div
        className={cn(" p-4 text-center", {
          hidden: formStep === 0 || formStep === 1,
        })}
      >
        <p className="text-xl text-green-300">Form Submitted Successfully</p>
      </div>
    </Form.Root>
  );
}

export default function SignUp() {
  return (
    <section id="signup-form" className=" flex flex-col items-center">
      <Toaster />
      <div className="flex max-w-md flex-col items-center justify-center gap-24 text-center sm:max-w-lg md:max-w-3xl lg:w-full">
        <p className="text-2xl">
          Tell us a bit about your challenge, don’t worry about the details, we
          can talk about that later.
        </p>
        {/* form details */}
        <SignupForm />
      </div>
    </section>
  );
}
