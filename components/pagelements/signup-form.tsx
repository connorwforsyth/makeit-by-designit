"use client";
import { cn } from "@/lib/utils";
import Arrow from "../Icons/Arrow";
import * as Form from "@radix-ui/react-form";
import React from "react";
import { useState } from "react";
import motion from "framer-motion";
import { Toaster, toast } from "sonner";
import posthog from "posthog-js";
import { compareAsc, format, formatDate, setDay } from "date-fns";

const makeItDates: Date[] = [
  // Year, Month, Date
  setDay(new Date(2024, 2, 20, 13), 5),
  setDay(new Date(2024, 5, 1, 13), 5),
  setDay(new Date(2024, 7, 1, 13), 5),
  setDay(new Date(2024, 9, 1, 13), 5),
];

function DatePicker({ className }: { className: string }) {
  return (
    <select
      className={className}
      name="date"
      defaultValue={makeItDates[0].toISOString()}
    >
      {makeItDates.map((date) => (
        <option key={date.toISOString()} value={date.toISOString()}>
          {format(date, "E d LLL yyyy")}
        </option>
      ))}
    </select>
  );
}
// Multistep Form
function SignupForm() {
  let [formStep, setFormStep] = React.useState(0);

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    const formData = new FormData(e.currentTarget);

    const body = {
      Name: formData.get("name") as string,
      Company: formData.get("company") as string,
      Challenge: formData.get("challenge") as string,
      Email: formData.get("email") as string,
      Phone: formData.get("phone") as string,
      Date: formData.get("date") as string,
    };

    console.log(body);

    posthog.identify(body.Email, {
      email: body.Email,
      name: body.Name,
      company: body.Company,
      phone: body.Phone,
      date: body.Date,
    });

    const fetchPromise = fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const promise = () =>
      new Promise((resolve) =>
        setTimeout(() => resolve({ name: "Sonner" }), 1000),
      );

    toast.promise(fetchPromise, {
      loading: "Loading...",
      success: (data) => {
        setFormStep(2);
        return `Thanks, your submission has been added.`;
      },
      error: "Error when submitting form.",
    });
  };

  const formStyles = {
    input:
      "ease-in-out appearance-none rounded-none border-b border-designit-gray bg-transparent px-1 text-2xl shadow-white transition autofill:bg-transparent hover:border-b-white focus:border-b-white",
  };

  return (
    <Form.Root
      onSubmit={handleForm}
      className="flex w-full flex-col gap-8 text-left text-2xl placeholder:text-gray-300 lg:text-4xl "
    >
      {/* Form step 1 */}
      <div
        className={cn("flex w-full flex-col gap-10", {
          hidden: formStep === 1 || formStep === 2,
        })}
      >
        {/* Name Field */}

        <Form.Field
          name="name"
          className="flex flex-col gap-6 bg-transparent md:flex-row"
        >
          <Form.Label className="">My name is</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              className={formStyles.input}
              type="text"
              name="name"
              placeholder="your name"
            />
          </Form.Control>
        </Form.Field>

        {/* Company Field */}
        <Form.Field
          name="company"
          className="flex flex-col gap-6 bg-transparent md:flex-row"
        >
          <Form.Label className="">from</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="text"
              name="company"
              placeholder="your company"
              required
              className={formStyles.input}
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
          <Form.Label className="">and my challenge is...</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <textarea
              name="challenge"
              placeholder="incorporating a sustainability focused offering for our subscribers..."
              required
              className="h-36 rounded-none border-b border-designit-gray bg-transparent px-1 text-2xl shadow-white transition ease-in-out autofill:bg-transparent hover:border-b-white  focus:border-b-white md:h-12"
            />
          </Form.Control>
        </Form.Field>
        {/* Continue Button */}
        <div className="flex w-full flex-grow justify-center">
          <button
            type="button"
            onClick={() => setFormStep(1)}
            className="group relative flex w-full items-center justify-center gap-2 overflow-clip rounded-full border-2 py-2 text-4xl transition-all duration-500 ease-in-out hover:text-black focus:text-black md:w-auto md:gap-8 md:px-16 md:py-8 md:text-6xl lg:px-16"
          >
            <div className="absolute inset-0 right-full -z-10 bg-white transition-all duration-500 ease-in-out group-hover:right-0 group-focus:right-0" />
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
        {/* Session Field */}
        <Form.Field name="date" className="flex flex-col gap-6 md:flex-row">
          <Form.Label className="">Our preferred session is on:</Form.Label>
          <div className="flex flex-grow flex-col gap-0.5">
            <Form.Control asChild className="flex flex-grow">
              <DatePicker className="rounded-none border-b border-designit-gray bg-transparent px-1 text-2xl shadow-white transition ease-in-out selection:bg-transparent autofill:bg-transparent hover:border-b-white focus:border-b-white" />
            </Form.Control>
          </div>
        </Form.Field>
        {/* Email Field */}
        <Form.Field name="email" className="flex flex-col gap-6 md:flex-row">
          <Form.Label className="">Contact me by email</Form.Label>
          <div className="flex flex-grow flex-col gap-0.5">
            <Form.Control asChild className="flex flex-grow">
              <input
                type="email"
                name="email"
                placeholder="you@yours.com"
                required
                className="appearance-none rounded-none border-b border-designit-gray bg-transparent px-1 text-2xl shadow-white transition ease-in-out selection:bg-transparent autofill:bg-transparent hover:border-b-white focus:border-b-white"
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
        <Form.Field name="phone" className="flex flex-col gap-6 md:flex-row">
          <Form.Label className="">or by phone</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="tel"
              name="phone"
              placeholder="+61"
              className="appearance-none rounded-none border-b border-designit-gray bg-transparent px-1 text-2xl shadow-white transition ease-in-out  autofill:bg-transparent hover:border-b-white focus:border-b-white"
            />
          </Form.Control>
        </Form.Field>
        {/* Submit Button */}
        <div className="flex flex-col gap-4">
          <div className="mt-14 flex justify-center">
            <Form.Submit
              type="submit"
              className="group relative flex w-full items-center justify-center gap-2 overflow-clip rounded-full border-2 py-2 text-4xl transition-all duration-500 ease-in-out hover:text-black focus:text-black md:w-auto md:gap-8 md:px-16 md:py-8 md:text-6xl lg:px-16"
            >
              <div className="absolute right-full -z-10 h-full w-full  bg-white transition-all duration-500 ease-in-out group-hover:right-0  group-focus:right-0" />
              Send <Arrow className="h-auto w-16" />
            </Form.Submit>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setFormStep(0)}
              className="text-2xl text-designit-gray underline transition-all hover:text-white"
            >
              Back
            </button>
          </div>
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
      <div className="flex max-w-md flex-col items-center justify-center gap-24 text-center sm:max-w-md md:max-w-3xl lg:w-full">
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
