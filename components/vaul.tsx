"use client";
import { Drawer } from "vaul";
import * as Form from "@radix-ui/react-form";

const DownloadForm = () => (
  <Form.Root>
    <Form.Field name="email">
      <div>
        <Form.Label>Your email</Form.Label>
        <Form.Message match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message match="typeMismatch">
          Please enter a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Field name="email">
      <div>
        <Form.Label>Your email</Form.Label>
        <Form.Message match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message match="typeMismatch">
          Please enter a valid email
        </Form.Message>
      </div>
      <Form.Control asChild>
        <input className="" type="email" required />
      </Form.Control>
    </Form.Field>
    <Form.Submit>
      <button>Download</button>
    </Form.Submit>
  </Form.Root>
);

export default function DownloadButton() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button>Download PDF</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-zinc-900 flex flex-col rounded-t-xl h-[40%] mt-24 fixed bottom-0 left-0 right-0">
          <div className="p-4  rounded-t-[10px] flex-1">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
            <div className="max-w-md mx-auto">
              <DownloadForm />
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
