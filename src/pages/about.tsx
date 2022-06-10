import { Layout } from "components/Layout";
import { SEO } from "components/SEO";
import { SectionTitle } from "components/SectionTitle";
import { Card } from "components/Card";
import YouTube from "react-youtube";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const YoutubeVideoWithCaption = (props) => {
  const { caption, videoId } = props;
  return (
    <figure className="max-w-4xl">
      <YouTube videoId={videoId} loading="lazy" />
      <figcaption className="w-full md:w-[640px] text-sm surface p-2">
        {caption}
      </figcaption>
    </figure>
  );
};

const images = [
  {
    original:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/1.png",
    thumbnail:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/1.png",
  },
  {
    original:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/Poster.jpg",
    thumbnail:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/Poster.jpg",
  },
  {
    original:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/IMG_3490_1.jpg",
    thumbnail:
      "https://res.cloudinary.com/gojutin/image/upload/w_640,h_480,c_fill/v1654651607/Community%20Solidarity/Image%20Gallery/IMG_3490_1.jpg",
  },
];

export default function Page() {
  return (
    <Layout>
      <SEO />
      <Card className="texture">
        <SectionTitle>About Community Solidarity</SectionTitle>

        <ul className="max-w-2xl list-disc ml-4 space-y-2">
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
              and Brooklyn. The food is distributed at our five Food Shares.
            </p>
          </li>
        </ul>

        <section className="my-8">
          <SectionTitle>Videos</SectionTitle>

          <div className="space-y-4">
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

        <section>
          <SectionTitle>Gallery</SectionTitle>
          <div className="w-[640px]">
            <ImageGallery items={images} />
          </div>
        </section>
      </Card>
    </Layout>
  );
}
