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

    <button type="submit" className="btn">
      <div className="mx-6 flex flex-col items-center gap-2 justify-center">
        <span className="text-3xl">Donate now!</span>
        <div className="items-center gap-1 flex text-xl">
          <FaCcVisa /> <FaCcMastercard /> <FaCcAmex />
          <FaCcDiscover />
        </div>
      </div>
    </button>
  </form>
);
