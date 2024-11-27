

const AboutMe = () => {
    return (
        <div>
            <div className="w-full h-fit flex flex-col gap-12 relative py-12">
                {/*<Image src="/hands.png" fill alt="" className="z-10 opacity-70"/>*/}
                <div className="w-8/12 h-0 shadow-glowing border border-pink-200 border-opacity-60 mr-auto" />
                <div className="w-8/12 h-0 shadow-glowing border border-pink-200 border-opacity-60 ml-auto" />

            </div>
            <div className="w-full flex flex-col md:flex-row py-8 px-4 lg:px-8 xl:xp-12 2xl:px-16 gap-8">
                <div className="w-60 rounded-md mb-auto md:w-72 lg:w-80 aspect-square mx-auto shadow-glowing border border-pink-200 border-opacity-15">

                </div>
                <div className="flex-1 flex flex-col gap-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold  w-full text-start z-30">About Me</h1>
                    <p className="md:text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam laborum voluptatum animi rem quibusdam ab accusantium architecto consequuntur facere in cum obcaecati iure veritatis, expedita asperiores quas ad ratione debitis omnis perferendis optio? Asperiores rerum earum praesentium animi, ratione perspiciatis inventore minus fugiat debitis accusantium expedita perferendis labore nesciunt nostrum, totam quae ea exercitationem sit blanditiis, excepturi autem quis commodi! Libero voluptatem neque, dolores non, illum a suscipit tempore quidem at temporibus expedita fuga vitae numquam sunt quam, hic eos consequuntur totam minima fugit. Incidunt exercitationem quisquam est voluptas quidem unde modi quis vel facilis, cumque consequuntur, quas odit saepe asperiores aspernatur similique amet! Cum doloribus dicta reprehenderit rem corporis distinctio, sunt necessitatibus expedita esse? Cum consequuntur neque voluptatum nobis.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe