import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 text-sm">
      {/* Legal / Notice Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200 space-y-3">
        <p>
          ◊ No Cost EMI is available with the purchase of an{" "}
          <a href="#" className="text-blue-600 hover:underline">
            eligible product
          </a>{" "}
          made using qualifying cards on 3- or 6-month tenures from most leading
          card issuers. Monthly pricing is rounded to the nearest rupee. Exact
          pricing will be provided by your card issuer, subject to your card
          issuer’s terms and conditions. Minimum order spend applies as per your
          card issuer’s threshold. No Cost EMI is not available to business
          customers and cannot be combined with Apple Store for Education or
          Corporate Employee Purchase Plan pricing. Card eligibility is subject
          to terms and conditions between you and your card issuer. Offer may be
          revised or withdrawn at any time without any prior notice.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms apply
          </a>
          .
        </p>

        <p>
          ‡ Instant cashback is available with the purchase of an{" "}
          <a href="#" className="text-blue-600 hover:underline">
            eligible product
          </a>{" "}
          with qualifying American Express, Axis Bank and ICICI Bank cards only.
          Minimum transaction value of ₹10001.00 applies.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Click here
          </a>{" "}
          to see instant cashback amounts and eligible devices. Instant cashback
          is available for up to two orders per rolling 90-day period with an
          eligible card. Card eligibility is subject to terms and conditions
          between you and your card issuer. Total transaction value is calculated
          after any trade-in credit or eligible discount is applied. Any
          subsequent order adjustment(s) or cancellation(s) may result in instant
          cashback being recalculated, and any refund may be adjusted to account
          for instant cashback clawback; this may result in no refund being made
          to you. Offer may be revised or withdrawn at any time without any prior
          notice.{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Additional terms apply
          </a>
          . Instant cashback is not available to business customers and cannot be
          combined with Apple Store for Education or Corporate Employee Purchase
          Plan pricing. Multiple separate orders cannot be combined for instant
          cashback.
        </p>

        <p>
          1. Testing conducted by Apple in July 2025 using AirPods Pro 3 paired
          with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise
          reduction was tested in accordance with IEC 60268-24. Comparison made
          against the best-selling wireless in-ear headphones commercially
          available at the time of testing. Performance depends on device
          settings, environment and many other factors.
        </p>

        <p>
          Apple Intelligence is available in beta. Some features may not be
          available in all regions or languages. For feature and language
          availability and system requirements, see{" "}
          <a
            href="https://support.apple.com/121115"
            className="text-blue-600 hover:underline"
          >
            support.apple.com/121115
          </a>
          .
        </p>

        <p>A subscription is required for Apple TV+.</p>

        <p>
          Features are subject to change. Some features, applications and
          services may not be available in all regions or all languages.
        </p>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Shop and Learn */}
        <div>
          <h3 className="font-semibold mb-3">Shop and Learn</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Store</a></li>
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">iPad</a></li>
            <li><a href="#" className="hover:underline">iPhone</a></li>
            <li><a href="#" className="hover:underline">Watch</a></li>
            <li><a href="#" className="hover:underline">AirPods</a></li>
            <li><a href="#" className="hover:underline">TV & Home</a></li>
            <li><a href="#" className="hover:underline">AirTag</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold mb-3">Account</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Manage Your Apple Account</a></li>
            <li><a href="#" className="hover:underline">Apple Store Account</a></li>
            <li><a href="#" className="hover:underline">iCloud.com</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">Entertainment</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Apple One</a></li>
            <li><a href="#" className="hover:underline">Apple TV+</a></li>
            <li><a href="#" className="hover:underline">Apple Music</a></li>
            <li><a href="#" className="hover:underline">Apple Arcade</a></li>
          </ul>
        </div>

        {/* Apple Store */}
        <div>
          <h3 className="font-semibold mb-3">Apple Store</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Find a Store</a></li>
            <li><a href="#" className="hover:underline">Genius Bar</a></li>
            <li><a href="#" className="hover:underline">Today at Apple</a></li>
            <li><a href="#" className="hover:underline">Group Reservations</a></li>
            <li><a href="#" className="hover:underline">Apple Camp</a></li>
            <li><a href="#" className="hover:underline">Apple Trade In</a></li>
            <li><a href="#" className="hover:underline">Ways to Buy</a></li>
            <li><a href="#" className="hover:underline">Recycling Programme</a></li>
          </ul>
        </div>

        {/* For Business */}
        <div>
          <h3 className="font-semibold mb-3">For Business</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Apple and Business</a></li>
            <li><a href="#" className="hover:underline">Shop for Business</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">For Education</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Apple and Education</a></li>
            <li><a href="#" className="hover:underline">Shop for Education</a></li>
            <li><a href="#" className="hover:underline">Shop for University</a></li>
          </ul>
        </div>

        {/* Apple Values */}
        <div>
          <h3 className="font-semibold mb-3">Apple Values</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Education</a></li>
            <li><a href="#" className="hover:underline">Environment</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Supply Chain Innovation</a></li>
          </ul>

          <h3 className="font-semibold mt-6 mb-3">About Apple</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Apple Leadership</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500 text-xs">
        © 2025 Apple Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
