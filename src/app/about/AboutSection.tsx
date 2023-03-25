import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

import { CardSection } from "components/CardSection";
import { FoodSharesLink } from "components/FoodSharesLink";

export function AboutSection() {
  return (
    <CardSection title="About Us" className="col-span-8 lg:col-span-3 h-full">
      <div className="surface p-4 rounded-xl font-medium text-xl mb-8">
        <p className="flex items-center gap-2 text-yellow-500 mb-4 text-2xl">
          Did you know <FaQuestionCircle />
        </p>
        <p>
          Every day, 27 million pounds of food waste is created on Long Island
          while 182,000 Long Islanders go hungry every night.
        </p>
      </div>

      <ul className="list space-y-8">
        <li>
          <p>
            Community Solidarity is a 501(c)3 nonprofit organization founded in
            2011 with the goal of fighting the social, economic, and
            environmental oppressions that are inflicted upon our community and
            our planet.
          </p>
        </li>
        <li>
          <p>
            <b className="text-cs-pink">FOOD IS A RIGHT</b>, not a privilege.
            This simple principle is core to our organization.
          </p>
        </li>

        <li>
          <p>
            We are a group of volunteers who rescue and distribute fresh,
            vegetarian groceries to families in need all across Long Island and
            Brooklyn. The food is distributed at our five <FoodSharesLink />.
            You can think of a Food Shares as essentially free plant-based
            grocery stores that are located across Long Island and NYC.
          </p>
        </li>
        <li>
          <p>
            Community Solidarity proudly holds the title of the largest
            vegetarian hunger relief organization, sharing millions of pounds of
            fresh groceries each year.
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
            In a single year, we are able to offset around 5 million pounds of
            C02 from the atmosphere. That is over 230 acres of forest!
          </p>
        </li>
        <li>
          <p>
            Our plant-based foods provide an alternative for people to switch to
            a compassionate diet, saving over 470,000 animals per year!
          </p>
        </li>
      </ul>
      <div className="w-full text-center">
        <Link href="/donate" className="btn my-12">
          Learn how you can get involved!
        </Link>
      </div>
    </CardSection>
  );
}
