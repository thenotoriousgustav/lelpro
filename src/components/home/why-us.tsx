const whyUs = [
  {
    id: 0,
    title: 'Berpengalaman',
    subtitle:
      'Berpengalaman lebih dari 45 tahun dan juga dipercayai oleh ratusan klien',
  },
  {
    id: 1,
    title: 'Beragam Pilihan Properties',
    subtitle: 'Menawarkan beragam pilihan properti sesuai kebutuhan',
  },
  {
    id: 2,
    title: 'terdepan dalam berinovasi',
    subtitle: 'Mengembangkan konsep dengan tren dan teknologi terkini',
  },
];

export default function WhyUs() {
  return (
    <section className='my-24'>
      <div>
        <div>
          <h1 className='text-center'>Mengapa Harus Lely Properties?</h1>
        </div>
        <div className='mt-16 flex justify-between'>
          {whyUs.map((item, id) => (
            <div key={id} className='w-3/12 '>
              <h1 className='text-primary'>0{id + 1}.</h1>
              <h3 className='my-4'>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
