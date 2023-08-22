interface Props {
  title: string;
  desc: string;
  children: React.ReactNode;
}

export default function HeadingSection({ title, desc, children }: Props) {
  return (
    <div className='mb-4 flex items-end justify-between'>
      <div>
        <h2>{title}</h2>
        <p className='text-gray-500'>{desc}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}
