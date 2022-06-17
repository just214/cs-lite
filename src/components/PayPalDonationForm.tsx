export const PayPalDonationForm = () => {
  return (
    <div>
      <div>
        <h5>Single donation</h5>

        <div>
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
            className="single-donation-form donation-form"
          >
            <div className="inner_content">
              <h3>Make a Donation</h3>
              <input name="landing_page" type="hidden" value="billing" />
              <input
                name="cpp_cart_border_color"
                type="hidden"
                value="FF0000"
              />
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
              <ul>
                <li>
                  <input
                    id="pre_single_0"
                    type="checkbox"
                    className="donation-amount donation-single"
                    value="500"
                  />
                  <label htmlFor="pre_single_0">$500</label>
                </li>
                <li>
                  <input
                    id="pre_single_1"
                    type="checkbox"
                    className="donation-amount donation-single"
                    value="250"
                  />{" "}
                  <label htmlFor="pre_single_1">$250</label>
                </li>
                <li>
                  <input
                    id="pre_single_2"
                    type="checkbox"
                    className="donation-amount donation-single"
                    value="100"
                  />{" "}
                  <label htmlFor="pre_single_2">$100</label>
                </li>
                <li>
                  <input
                    id="pre_single_3"
                    type="checkbox"
                    className="donation-amount donation-single"
                    value="50"
                  />{" "}
                  <label htmlFor="pre_single_3">$50</label>
                </li>
                <li>
                  <input
                    id="pre_single_4"
                    type="checkbox"
                    className="donation-amount donation-single"
                    value="25"
                  />{" "}
                  <label htmlFor="pre_single_4">$25</label>
                </li>{" "}
                <li className="last">
                  Other: $
                  <input name="other" type="text" value="" className="other" />
                </li>
                <input
                  type="hidden"
                  value=""
                  name="amount"
                  className="amount-holder"
                />
              </ul>
              <input name="currency_code" type="hidden" value="USD" />
              <br></br>
            </div>
            <button type="submit" className="donation-submit-button">
              Donate now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
