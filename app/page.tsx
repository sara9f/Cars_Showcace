'use client'

import { Hero , SearchBar, CustomFilter , CarCard, ShowMore} from "@/components/index";
import { fuels , yearsOfProduction } from "@constants";
import { HomeProps } from "@types";
import { fetchCars } from "@utils";
import { useEffect, useState } from "react";
import { getEnabledCategories } from "trace_events";
import Image from "next/image";
export default  function Home() {

  const [allCars, setAllCars] = useState([])
  const [loading, setLoading] = useState(false)

  //search states
  const [manufacture, setManufacture] = useState('')
  const [model, setModel] = useState('')
  //filter states
  const [year, setYear] = useState(2023)
  const [fuel, setFuel] = useState('')
  //pagination states
  const [limit, setLimit] = useState(10)



  const getCars = async () =>{
    setLoading(true)
    try {
      const result= await fetchCars({
        manufacture:manufacture || '',
        year:year || 2023,
        fuel:fuel ||'',
        limit:limit ||10,
        model: model ||'',
      })
      setAllCars(result)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    getCars();
  
  }, [manufacture,year,fuel,limit,model])
  
  // const allCars=  fetchCars({
  //   manufacture:searchParams.manufacture || '',
  //   year:searchParams.year || 2022,
  //   fuel:searchParams.fuel ||'',
  //   limit:searchParams.limit ||10,
  //   model:searchParams.model ||'',
  // })
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero  />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Car Catalogue
          </h1>
          <p> Explore the car you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManufacture={setManufacture} setModel={setModel} />
          <div className="home__filter-container">
            <CustomFilter options={fuels} setFilter={setFuel}  />
            <CustomFilter options={yearsOfProduction} setFilter={setYear}  />
          </div>
        </div>
        
        {allCars.length>0 ?(
          <section>
            <div className="home__cars-wrapper">
              {/* {allCars.map((car)=>
              <CarCard car={car}/>
              )} */}
              {allCars?.map((car, index) => (
                <CarCard key={`car-${index}`} car={car} />
              ))}
            </div>
            {
              loading && (
                <div className="mt-16 w-full flex-center">
                  <Image 
                  src='./loader.svg'
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'/>
                </div>
              )
            }
            <ShowMore
            pageNumber={limit  / 10}
            isNext={limit  > allCars.length}
            setLimit={setLimit}/>

          </section>
        ) :(
          !loading && (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold"> oops , we have no result</h2>
          </div>
          )
        )}
      </div>
    </main>
  );
}
