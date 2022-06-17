import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { FaLightbulb } from "react-icons/fa";
import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import ReactPlayer from "react-player";
import { FoodSharesLink } from "components/FoodSharesLink";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const NUMBER_OF_PHOTOS = 65;

const YOUTUBE_VIDEO_IDS = [
  "SbZTR5rMvn4",
  "xuQPQ9ly-ek",
  "v76MyFuXfqc",
  "1TreRFT6Zqg",
  "E_IPVJSfwl0",
];

const photos = Array.from(
  { length: NUMBER_OF_PHOTOS },
  (_, i) => `/album/${i + 1}.jpg`
);

const YoutubeSlide = ({
  url,
  isSelected,
}: {
  url: string;
  isSelected?: boolean;
}) => (
  <ReactPlayer
    muted={true}
    controls={true}
    width="100%"
    url={url}
    playing={isSelected}
  />
);

export default function Page() {
  const customRenderItem = (item, props) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url) => {
    return url.split("https://www.youtube.com/embed/")[1];
  };

  const customRenderThumb = (children) =>
    children.map((item) => {
      const videoId = getVideoId(item.props.url);
      // eslint-disable-next-line @next/next/no-img-element
      return <img key={videoId} src={getVideoThumb(videoId)} alt="thumbnail" />;
    });

  return (
    <Layout>
      <SEO />

      <div className="w-full grid grid-cols-8 gap-8">
        <section className=" w-full col-span-8 lg:col-span-3">
          <SectionTitle>About Us</SectionTitle>
          <div className="texture surface-alt rounded-xl p-4">
            <div className="surface p-4 rounded-xl mb-4">
              <p className="flex items-center gap-2 text-yellow-500 font-medium ">
                <FaLightbulb />
                Did you know?
              </p>
              <p>
                27 million pounds of food waste is created on Long Island every
                day while 182,000 Long Islanders go hungry every night.
              </p>
            </div>

            <ul className="list-disc space-y-2 pl-6">
              <li>
                <p>
                  Community Solidarity is a 501(c)3 nonprofit organization
                  founded in 2011 with the goal of fighting the social,
                  economic, and environmental oppressions that are inflicted
                  upon our community and our planet.
                </p>
              </li>
              <li>
                <p>
                  <b>FOOD IS A RIGHT</b>, not a privilege. This simple principle
                  is core to our organization.
                </p>
              </li>

              <li>
                <p>
                  We are a group of volunteers who rescue and distribute fresh,
                  vegetarian groceries to families in need all across Long
                  Island and Brooklyn. The food is distributed at our five{" "}
                  <FoodSharesLink />. You can think of a Food Shares as
                  essentially free plant-based grocery stores that are located
                  across Long Island &apos; NYC.
                </p>
              </li>
              <li>
                <p>
                  Community Solidarity proudly holds the title of the largest
                  vegetarian hunger relief organization, sharing millions of
                  pounds of fresh groceries each year.
                </p>
              </li>

              <li>
                <p>
                  Every $1 donated enables us to share around 30 pounds of fresh
                  groceries to families or individuals in need.
                </p>
              </li>
              <li>
                <p>
                  In a single year, we are able to offset around 5 million
                  pounds of C02 from the atmosphere. That is over 230 acres of
                  forest!
                </p>
              </li>
              <li>
                <p>
                  Our plant-based foods provide an alternative for people to
                  switch to a compassionate diet, saving over 470,000 animals
                  per year!
                </p>
              </li>
            </ul>
            <div className="w-full text-center">
              <Link href="/donate">
                <a className="cta my-6 w-full">
                  Learn how you can get involved!
                </a>
              </Link>
            </div>
          </div>
        </section>

        <div className="space-y-8 col-span-8 lg:col-span-5">
          <SectionTitle>Photos</SectionTitle>
          <section className="texture p-4 rounded-xl surface-alt">
            <Carousel
              width="100%"
              className="w-full max-w-96"
              showThumbs={true}
              autoPlay={true}
              showIndicators={false}
            >
              {photos.map((photo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={photo} src={photo} alt="CS Photos" />
              ))}
            </Carousel>
          </section>
          <SectionTitle>Videos</SectionTitle>
          <section className="texture p-4 rounded-xl surface-alt">
            <Carousel
              width="100%"
              emulateTouch={true}
              showArrows={true}
              showThumbs={true}
              showIndicators={false}
              showStatus={false}
              infiniteLoop={true}
              renderItem={customRenderItem}
              renderThumbs={customRenderThumb}
            >
              {YOUTUBE_VIDEO_IDS.map((videoId) => {
                return (
                  <YoutubeSlide
                    key={videoId}
                    url={`https://www.youtube.com/embed/${videoId}`}
                  />
                );
              })}
            </Carousel>
          </section>
        </div>
      </div>
    </Layout>
  );
}
