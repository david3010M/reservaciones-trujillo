export interface TitleProps {
  title: string;
  description: string;
  height?: string;
  width?: string;
  className?: string;
}

export default function Title({
  title,
  description,
  height = "200px",
  width = "100%",
  className,
}: TitleProps) {
  return (
    <section
      style={{ backgroundImage: `url('bgtitle.jpg')`, height, width }}
      className={`bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative ${className}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl font-playfair mb-4 text-black font-bold">{title}</h1>
        <p className="text-[#d69c4f]">{description}</p>
      </div>
    </section>
  );
}
