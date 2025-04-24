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
  height = "230px",
  width = "100%",
  className,
}: TitleProps) {
  return (
    <section
      style={{ backgroundImage: `url('/bgtitle.jpg')`, height, width }}
      className={`bg-cover bg-center bg-no-repeat flex items-center justify-center text-white relative ${className}`}
    >
      <div className="container max-w-screen-lg mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-playfair mb-4 text-black font-bold">
          {title}
        </h1>
        <p className="text-hotel-gold text-xs md:text-base">{description}</p>
      </div>
    </section>
  );
}
