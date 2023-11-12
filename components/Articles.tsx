import Image from "next/image"

function Articles() {
    return (
        <div className="pt-24 pb-20 px-4 md:w-5/6 md:m-auto">
            <h2 className="text-[34px] text-center lg:[40px] lg:text-left">Latest Articles</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 md:mt-16 lg:grid-cols-4">
                <div className="bg-white rounded-md overflow-hidden">
                    <Image
                        src='/image-currency.jpg'
                        alt="image currency"
                        width={100}
                        height={100}
                        className="w-full h-[218px] object-cover"
                    />
                    <div className="px-8 pt-6 pb-10">
                        <span className="text-[10px]">By Claire Robinson</span>
                        <h3 className="text-lg leading-tight mt-1 cursor-pointer hover:text-Lime-Green transition ">Receive money in any currency with no fees</h3>
                        <p className="text-sm mt-2">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>

                <div className="bg-white rounded-md overflow-hidden">
                    <Image
                        src='/image-restaurant.jpg'
                        alt="image restaurant"
                        width={100}
                        height={100}
                        className="w-full h-[218px] object-cover"
                    />
                    <div className="px-8 pt-6 pb-10">
                        <span className="text-[10px]">By Wilson Hutton</span>
                        <h3 className="text-lg leading-tight mt-1 cursor-pointer hover:text-Lime-Green transition ">Treat yourself without worrying about money</h3>
                        <p className="text-sm mt-2">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>

                <div className="bg-white rounded-md overflow-hidden">
                    <Image
                        src='/image-plane.jpg'
                        alt="image plane"
                        width={100}
                        height={100}
                        className="w-full h-[218px] object-cover"
                    />
                    <div className="px-8 pt-6 pb-10">
                        <span className="text-[10px]">By Wilson Hutton</span>
                        <h3 className="text-lg leading-tight mt-1 cursor-pointer hover:text-Lime-Green transition ">Take your Easybank card wherever you go</h3>
                        <p className="text-sm mt-2">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>

                <div className="bg-white rounded-md overflow-hidden">
                    <Image
                        src='/image-confetti.jpg'
                        alt="image confetti"
                        width={100}
                        height={100}
                        className="w-full h-[218px] object-cover"
                    />
                    <div className="px-8 pt-6 pb-10">
                        <span className="text-[10px]">By Claire Robinson</span>
                        <h3 className="text-lg leading-tight mt-1 cursor-pointer hover:text-Lime-Green transition ">Our invite-only Beta accounts are now live!</h3>
                        <p className="text-sm mt-2">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Articles