# Roman Empire — rental website prototype

Local design milestone 1. All properties, addresses, and photographs are illustrative. No inquiries are transmitted or stored. No availability, booking, payment, or email integration exists yet.

## Preview

From this directory run `python -m http.server 4174 --bind 127.0.0.1`, then open http://127.0.0.1:4174.

## Property folders

`properties/index.json` lists property folder names. Every folder contains `property.json` and `images/`. To replace a sample, edit its JSON and place photos in its images folder. Image paths are relative to the website root, for example `properties/palm-house/images/front.jpg`.

Fields: id, name, type (`short` or `long`), location, address, beds, baths, guests, description, amenities (array), images (array of `{src, alt}`), sample. Set `sample` to false for verified real content; remove prototype labels only when the entire portfolio is verified. Add new location options to index.html when introducing locations beyond the three prototype locations. Photos retain their supplied order in the gallery.

Keep private owner documents, identity documents, access codes, and unpublished information out of this public website folder. Obtain permission to publish supplied photographs.

## Design

Sanctuary Cliff inspired the editorial serif typography, warm ivory and teal palette, generous space, and architectural photography. Roman Empire introduces portfolio browsing, rental-type and location filters, gallery detail views, and distinct stay/viewing inquiry language.

External dependencies: Google Fonts and illustrative Unsplash image URLs. Real property photographs should be local files. The prototype can run without a build or package installation.

## Milestones

1. Portfolio prototype and browsing flow (current).
2. Review branding, layout, and mobile experience.
3. Replace illustrative content with verified property folders.
4. Connect inquiries and finalize publication settings.

Repository: https://github.com/hypersan-byte/RomanEmpire. The prototype is static and requires no build command; publish the repository root when configuring staging. `create-samples.mjs` reproduces the sample data and overwrites the sample property JSON; do not run it after replacing data.


Pricing is not published or included in property data. Cards and property details lead to a property-specific contact inquiry.

