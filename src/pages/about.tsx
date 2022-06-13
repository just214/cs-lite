import { Layout } from "components/Layout";
import Image from "next/image";
import Head from "next/head";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import YouTube from "react-youtube";
import { NextLink } from "components/NextLink";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const NUMBER_OF_PHOTOS = 4;

const photos = Array.from(
  { length: NUMBER_OF_PHOTOS },
  (_, i) => `/album/${i + 1}.jpg`
);

const YoutubeVideoWithCaption = (props) => {
  const { caption, videoId } = props;
  return (
    <figure className="w-screen md:w-[640px]">
      <iframe
        width="640"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="w-full md:w-[640px]"
      />

      <figcaption className="text-sm surface p-2">{caption}</figcaption>
    </figure>
  );
};

export default function Page() {
  return (
    <Layout>
      <SEO />
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <section>
          <SectionTitle>About Community Solidarity</SectionTitle>

          <ul className="list-disc space-y-2 pl-8">
            <li>
              <p>
                Community Solidarity is a 501(c)3 nonprofit organization founded
                in 2011.
              </p>
            </li>
            <li>
              <p>
                Community Solidarity proudly holds the title of the largest
                vegetarian hunger relief organization.
              </p>
            </li>
            <li>
              <p>
                We are a group of volunteers who rescue and distribute fresh,
                vegetarian groceries to families in need all across Long Island
                and Brooklyn. The food is distributed at our five{" "}
                <NextLink href="/food-shares">Food Shares</NextLink>.
              </p>
            </li>
          </ul>
        </section>

        <section>
          <SectionTitle>Photos</SectionTitle>
          <Carousel className="w-full md:w-[640px]" showThumbs={true}>
            {photos.map((photo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="w-full md:w-[640px]"
                height="480"
                width="640"
                key={photo}
                src={photo}
                alt="CS Photos"
              />
            ))}
          </Carousel>
          <SectionTitle>Videos</SectionTitle>

          <div className="space-y-4">
            <YoutubeVideoWithCaption
              caption="News 12: Making a Difference with Jon Stepanian"
              videoId="SbZTR5rMvn4"
            />
            <YoutubeVideoWithCaption
              caption="An inspiring 3 minute video created by volunteer, Phillip Gladkov,
            and narrated by Jon Stepanian."
              videoId="xuQPQ9ly-ek"
            />
            <YoutubeVideoWithCaption
              caption="A TED talk by Jon Stepanian about Community Solidarity and hunger relief |
            TEDxNYU"
              videoId="v76MyFuXfqc"
            />
            <YoutubeVideoWithCaption
              caption="See a Food Share in action with this 30s time lapse video of our
            Thursday Farmingville Food Share."
              videoId="1TreRFT6Zqg"
            />
            <YoutubeVideoWithCaption
              caption="See the Community Solidarity Thanksgiving 2020 event where we provided food to over 22,000 people."
              videoId="E_IPVJSfwl0"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
