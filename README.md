# Forge & Frames Limited — GitHub Pages site

This folder contains the static export of the Forge & Frames Limited website.

## Deploy with GitHub Pages

1. Upload the contents of this folder to the root of your GitHub Pages repository.
2. In GitHub, open **Settings → Pages**.
3. Select **Deploy from a branch**, choose the branch containing these files, and choose **/ (root)**.
4. Save and wait for GitHub Pages to publish the site.
5. If using Cloudflare, add the custom domain in GitHub Pages and configure the DNS records in Cloudflare.

## Important note about the catalog

The original Manus site links to `catalog/forge-frames-company-catalog.pdf`, but that file was not publicly available when this export was created. Add the PDF at:

```text
catalog/forge-frames-company-catalog.pdf
```

The download button is already configured to use that local path. Until the PDF is added, the button will not work.

## Form behavior

The inquiry form is client-side only. On submission it opens WhatsApp with the visitor's details pre-filled for review. No server or database is required.
