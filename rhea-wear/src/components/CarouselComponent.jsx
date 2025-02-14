import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CarouselComponent() {
  const navigate = useNavigate();

  const handleShop = () => {
    navigate("/shop");
  };
  const handleMember = () => {
    navigate("/register");
  };
  return (
    <Carousel className="md:h-full ">
      <Carousel.Item interval={500}>
        <img
          text="First slide"
          src="/assets/carousel1.png "
          className=" h-[600px] object-cover w-screen md:w-auto md:object-right object-top "
        />

        <Carousel.Caption className="flex w-72 text-left md:ml-48 items-start gap-4  md:pb-64 md:w-48 pb-32 flex-col ">
          <h3 className="font-semibold text-sm md:text-xs">SUMMER 2020</h3>
          <h1 className=" text-4xl font-bold md:text-3xl">
            Vita Classic Product
          </h1>
          <p className="text-sm md:text-xs">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
          <div className="flex gap-4  items-center">
            <p className="font-bold md:text-xs"> $16.48</p>
            <button
              onClick={handleShop}
              className="bg-green-400 md:text-xs px-3 py-2 rounded-md font-bold text-sm cursor-pointer hover:text-md hover:bg-green-200 shadow-md"
            >
              GO TO SHOP
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          text="Second slide"
          src="/assets/carusel2.jpeg"
          className=" h-[600px] object-cover w-screen md:w-auto "
        />
        <div className="">
          <Carousel.Caption>
            <button
              onClick={handleShop}
              className="  bg-stone-200/90 hover:bg-stone-200/75 cursor-pointer    text-zinc-500 px-3 py-2 rounded-md shadow-xl font-bold"
            >
              SUMMER DEAL
            </button>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          text="Third slide"
          src="/assets/carusel3.jpeg"
          className=" h-[600px] object-cover w-screen md:w-auto object-top "
        />
        <div className="">
          <Carousel.Caption className="flex w-72 text-left items-center gap-4  md:pb-58 md:w-48 pb-32 flex-col ">
            <h2 className="font-bold text-4xl flex flex-col items-center">
              Exclusive
              <h1 className="text-9xl font-bold ">10%</h1>
              Discount
            </h2>
            <p className="text-sm ">For new members only!</p>

            <div>
              <button
                onClick={handleMember}
                className=" text-[#00B3DC] shadow-lg cursor-pointer hover:bg-white/40 bg-white px-6 py-2 rounded-md font-bold  "
              >
                Become a Member
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>{" "}
    </Carousel>
  );
}

export default CarouselComponent;
