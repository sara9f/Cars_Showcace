'use client'
import { CustomButton } from '@components'
import { showMoreProps } from '@types'


const ShowMore = ({pageNumber , isNext , setLimit}:showMoreProps) => {


  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit)
  }
  return (
    <div className="w-full flex-center gap-5 mt-10">
    {!isNext && (
    <CustomButton
        btnType="button"
        title="Show More"
        containerStyles="bg-primary-blue rounded-full text-white"
        handleClick={handleNavigation}
    />
    )}
  </div>
  )

}
export default ShowMore ;