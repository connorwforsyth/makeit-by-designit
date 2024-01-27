"use client";
import Arrow from "./Icons/Arrow";
import Globe from "./Icons/globe";
import * as Form from "@radix-ui/react-form";

function SignupForm() {
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

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  };

  return (
    <Form.Root
      onSubmit={handleForm}
      className="flex w-full max-w-md flex-col gap-8 text-left placeholder:text-gray-300 "
    >
      <div className="flex w-full flex-col gap-2">
        {/* Name Field */}
        <Form.Field name="name" className="flex gap-2 bg-transparent">
          <Form.Label className="text-xl">My name is</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              className="border-b border-designit-gray bg-transparent"
              type="text"
              name="name"
              placeholder="your name"
              required
            />
          </Form.Control>
        </Form.Field>

        {/* Company Field */}
        <Form.Field name="company" className="flex w-full gap-2">
          <Form.Label className="text-xl">from</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="text"
              name="company"
              placeholder="your company"
              required
              className="border-b bg-transparent"
            />
          </Form.Control>
        </Form.Field>

        {/* Email Field */}
        <Form.Field name="email" className="flex gap-2">
          <Form.Label className="text-xl">Email</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="email"
              name="email"
              placeholder="you@yours.com"
              required
              className="border-b bg-transparent"
            />
          </Form.Control>
        </Form.Field>
        {/* Phone Field */}
        <Form.Field name="phone" className="flex gap-2">
          <Form.Label className="text-xl">Phone</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <input
              type="tel"
              name="phone"
              required
              placeholder="+61"
              className="border-b bg-transparent"
            />
          </Form.Control>
        </Form.Field>

        {/* Challenge Field */}
        <Form.Field name="challenge" className="flex flex-col">
          <Form.Label className="text-xl">And my challenge is...</Form.Label>
          <Form.Control asChild className="flex flex-grow">
            <textarea
              name="challenge"
              required
              placeholder="incorporating a sustainability focused offering for our subscribers..."
              className="placeholder:text-gray box-border flex-grow border-b bg-transparent"
            />
          </Form.Control>
        </Form.Field>
        {/* Submit Button */}
      </div>
      <div className="flex w-full flex-grow justify-center">
        <Form.Submit
          type="submit"
          className="group relative flex items-center justify-center gap-2 overflow-clip rounded-full border-2 p-6 text-6xl transition-all  hover:text-black"
        >
          <div className="absolute right-full -z-10 h-full w-full bg-white transition-all group-hover:right-0" />
          Submit <Arrow className="h-auto w-16" />
        </Form.Submit>
      </div>
    </Form.Root>
  );
}

export default function SignUp() {
  return (
    <section id="signup-form" className="flex flex-col items-center">
      <Globe />
      <div className="flex max-w-md flex-col items-center justify-center gap-8 text-center sm:max-w-lg md:max-w-3xl lg:w-full">
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
