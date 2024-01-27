export interface TableProps {
  no: string;
  title: string;
  description: string;
}

export function HowItWorksTable({ children }: { children: React.ReactNode }) {
  return <ol className="w-full border-b">{children}</ol>;
}

export function HowItWorksItem({ no, title, description }: TableProps) {
  return (
    <li className="grid grid-cols-12 border-t">
      <div className="col-span-1 p-16 text-2xl">{no}</div>
      <div className="col-span-5 p-16">
        <h3 className="text-4xl">{title}</h3>
      </div>
      <div className="col-span-6 p-16">
        <p>{description}</p>
      </div>
    </li>
  );
}
