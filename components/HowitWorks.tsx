export interface TableProps {
  no: string;
  title: string;
  description: string;
}

export function HowItWorksTable({ children }: { children: React.ReactNode }) {
  return <ol className="max-w-7xl border-b">{children}</ol>;
}

export function HowItWorksItem({ no, title, description }: TableProps) {
  return (
    <li className="grid grid-cols-1 gap-8 border-t py-12 md:grid-cols-12 md:p-8">
      <div className="col-span-1 text-2xl">{no}</div>
      <div className="col-span-1 text-4xl md:col-span-5">
        <h3>{title}</h3>
      </div>
      <div className="col-span-1 md:col-span-6">
        <p>{description}</p>
      </div>
    </li>
  );
}
