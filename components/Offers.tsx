import Image from "next/image";

export default function Offers() {
    return (
        <div className="mt-20 bg-Light-Grayish-Blue px-4 py-16 lg:mt-0 lg:py-20">
            <div className="md:flex md:flex-col md:items-center md:w-5/6 md:m-auto lg:block">

            <div className="text-center lg:text-left w-[570px]">
            <h2 className="text-[34px] leading-tight lg:text-[40px]">Why choose Easybank?</h2>
            <p className="mt-4">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>

            <div className="grid gap-8 mt-14 md:grid-cols-2 text-center lg:grid-cols-4 lg:text-left lg:mt-16">
                <div className="flex flex-col items-center lg:items-start">
                    <Image
                        src='icon-online.svg'
                        alt="icon online"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-xl mt-6">Online Banking</h3>
                    <p className="mt-4">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <Image
                        src='icon-budgeting.svg'
                        alt="icon budgeting"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-xl mt-6">Simple Budgeting</h3>
                    <p className="mt-4">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <Image
                        src='icon-onboarding.svg'
                        alt="icon onboarding"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-xl mt-6">Fast Onboarding</h3>
                    <p className="mt-4">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>

                <div className="flex flex-col items-center lg:items-start">
                    <Image
                        src='icon-api.svg'
                        alt="icon api"
                        width={80}
                        height={80}
                    />
                    <h3 className="text-xl mt-6">Open API</h3>
                    <p className="mt-4">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
            </div>
        </div>
    )
}
