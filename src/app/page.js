import FeaturedPage from "@/components/Featured";
import PetCareTipsPage from "@/components/PetCareTips";
import SuccessStoriesPage from "@/components/SuccessStories";
import WhyAdoptPetPage from "@/components/WhyAdoptPet";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold">
            Find a new best friend
          </p>

          <h1 className="text-5xl font-bold ">
            Give a loving pet a forever home.
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Browse pets looking for a loving family and find your perfect
            companion.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/all-pets"
              className="rounded-lg bg-black px-6 py-3 text-white">
              Browse Pets
            </a>

            <a href="/register" className="rounded-lg border px-6 py-3">
              Get Started
            </a>
          </div>
        </div>
      </section>
      <section>
        <FeaturedPage></FeaturedPage>
        <WhyAdoptPetPage></WhyAdoptPetPage>
        <SuccessStoriesPage></SuccessStoriesPage>
        <PetCareTipsPage></PetCareTipsPage>
      </section>
    </div>
  );
}
