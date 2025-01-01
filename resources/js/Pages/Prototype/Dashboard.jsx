import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovies from "@/Components/FeaturedMovies";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <Authenticated>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
                <title>Dashboard</title>
            </Head>
            <div>
                <div className="font-semibold text-[22px] text-black mb-4">
                    Featured Movies
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4].map((i) => (
                        <FeaturedMovies
                            key={i}
                            slug="the-batman-in-love"
                            name={`The Batman in Love ${i}`}
                            category="Action • Horror"
                            thumbnail="/images/featured-1.png"
                            rating={i}
                        />
                    ))}
                </Flickity>
            </div>
            <div className="mt-[50px]">
                <div className="font-semibold text-[22px] text-black mb-4">
                    Browse
                </div>
                <Flickity className="gap-[30px]" options={flickityOptions}>
                    {[1, 2, 3, 4, 5, 6, 8, 9, 10].map((i) => (
                        <MovieCard
                            key={i}
                            slug="meong-golden"
                            name={`Meong Golden ${i}`}
                            category="Action • Comedy"
                            thumbnail="/images/browse-1.png"
                            rating={i}
                        />
                    ))}
                </Flickity>
            </div>
        </Authenticated>
    );
}
