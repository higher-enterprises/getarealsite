# Realsite Digital Marketing Service Detail Pages — v2

Includes:
- Shared `MarketingServicePage.tsx`
- Shared `ServiceContactForm.tsx`
- 12 service page route files
- Existing 12 SVG service graphics

## Contact form behavior

Every service page passes both `service` and `serviceSlug` into the reusable contact form.
Those values are added to the submission payload automatically, along with:

`source: "digital-marketing-service-page"`

The form currently runs in simulation mode and logs the payload to the browser console.
Inside `ServiceContactForm.tsx` there is a clearly marked `fetch("/api/contact")` block ready
to enable once your actual contact API endpoint is connected.

The "Get Started", "Book A Strategy Call", and final CTA buttons scroll directly to the form.

Routes:

- `/reach/search-engine-optimization` — Search Engine Optimization
- `/reach/paid-advertising` — Paid Advertising
- `/reach/social-media-marketing` — Social Media Marketing
- `/reach/email-marketing` — Email Marketing
- `/reach/conversion-rate-optimization` — Conversion Rate Optimization
- `/reach/analytics-reporting` — Analytics & Reporting
- `/reach/content-marketing` — Content Marketing
- `/reach/affiliate-marketing` — Affiliate Marketing
- `/reach/mobile-marketing` — Mobile Marketing
- `/reach/video-marketing` — Video Marketing
- `/reach/display-advertising` — Display Advertising
- `/reach/marketing-automation` — Marketing Automation