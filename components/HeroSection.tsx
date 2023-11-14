import Image from "next/image";

export default function HeroSection() {
  return (
    <div className='lg:flex lg:w-5/6 m-auto lg:items-center lg:justify-between  lg:py-28'>

    {/* hero section images */}
    {/* mobile view images */}
    <div className='lg:hidden'>
      <Image
        src='bg-intro-mobile.svg'
        alt='intro backgroung'
        width={100}
        height={0}
        className='w-screen'
      />
      <Image
        src='/image-mockups.png'
        alt='image mockups'
        width={100}
        height={0}
        className='absolute -top-[50px] left-1/2 -translate-x-1/2 w-11/12'
      />
    </div>

    {/* desktop view images */}
    <div className='hidden lg:flex order-2 relative items-center justify-center'>
      <Image
        src='bg-intro-desktop.svg'
        alt='intro background'
        width={100}
        height={100}
        className='w-full'
      />
      <Image
        src='/image-mockups.png'
        alt='image mockups'
        width={100}
        height={0}
        className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[550px]'
      />
    </div>

    {/* hero section info */}
    <div className='flex flex-col items-center px-4 text-center md:w-5/6 m-auto lg:w-[850px] lg:items-start lg:text-left lg:m-0'>
    
      <h1 className='text-4xl lg:text-[54px] lg:leading-tight'>  Next generation digital banking</h1>
      <p className='mt-4 lg:mt-6'>Take your financial life online. Your Easybank account will be a one-stop-shop
        for spending, saving, budgeting, investing, and much more.</p>
      <button className='btn mt-6 lg:mt-10'>Request Invite</button>
    </div>
  </div>
  )
}
