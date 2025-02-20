import Button from "../Components/Button"
import CommonTable from "../Components/CommonTable";

const HomePage = () => {
  const pageDirect = () =>{
    console.log('button click');
  };

  const headers = ['s.n','name','email', 'location'];

  return (
    <div>
      <section className="flex justify-between items-center min-h-[80vh] max-w-[80%] m-auto pt-[100px]">
        <div className="flex-1 flex flex-col">
          <h2 className="text-[58px] font-bold leading-[1.2] mb-5">
            Elevate Your Brand
            With Expert SEO &
            Digital Marketing
          </h2>
          <p className="text-[20px] leading-[1.3] mb-8">
            Welcome to SEOC where we specialize in revolutionizing your online
            presence through expert SEO and digital marketing solutions.
          </p>
          
          <Button handleClick={pageDirect}>
            Contact Now
          </Button>
            
        </div>
        <div className="flex-1 flex justify-center">
          <div className="image">
            <img src="/vite.svg" alt="" className="w-[380px] h-auto" />
          </div>
        </div>
      </section>

      <section className=" max-w-[80%] m-auto">
        <CommonTable headers={headers} />
      </section>

    </div>
  )
}

export default HomePage
