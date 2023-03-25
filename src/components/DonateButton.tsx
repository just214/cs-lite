import {
  FaCcAmex,
  FaCcDiscover,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";

export const DonateButton = () => (
  <form
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    target="_blank"
  >
    <div className="inner_content">
      <input name="landing_page" type="hidden" value="billing" />
      <input name="cpp_cart_border_color" type="hidden" value="FF0000" />
      <input name="cpp_payflow_color" type="hidden" value="D20137" />
      <input
        name="business"
        type="hidden"
        value="jonsteps@communitysolidarity.org"
      />
      <input name="cmd" type="hidden" value="_donations" />
      <input
        type="hidden"
        name="notify_url"
        value="https://communitysolidarity.us7.list-manage.com/subscribe/paypal-ipn?u=d526e39052615c32057079576&amp;id=775a503f33"
      />
      <input
        type="hidden"
        name="return"
        value="https://communitysolidarity.org/donate/funds/thank_you"
      />
      <input name="item_name" type="hidden" value="Donation" />

      <input name="currency_code" type="hidden" value="USD" />
    </div>

    <button
      type="submit"
      className="display-text px-8 text-white text-4xl animation-all duration-200 ease-in-out inline-flex glow items-center gap-2 justify-center rounded-lg py-3 border-none  bg-gradient-to-br hover:bg-gradient-to-bl from-sky-900  to-purple-900 flex-col"
    >
      <span>Donate now!</span>
      <div className="items-center gap-1 flex text-xl">
        <FaCcVisa /> <FaCcMastercard /> <FaCcAmex />
        <FaCcDiscover />
      </div>
    </button>
  </form>
);
