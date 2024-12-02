export default {
  docsRepositoryBase:
    "https://github.com/eli32-vlc/fmhyguidesindex/tree/main/pages",
  logo: (
    <span>
      <strong>FMHY Guides Index</strong>
    </span>
  ),
  project: {
    link: "https://github.com/eli32-vlc/fmhyguidesindex",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="FMHY Guides Index" />
      <meta
        property="og:description"
        content="Your Guide to Troubleshooting Problems in FMHY."
      />
      <meta
        property="og:image"
        content="https://small.fileditchstuff.me/s19/YsciPpCiHZrbQvbTrLl.png"
      />
      <meta property="og:image:alt" content="FMHY Guides Index Social Card" />
      <meta property="og:url" content="https://guides.fmhy.lol" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://small.fileditchstuff.me/s19/YsciPpCiHZrbQvbTrLl.png"
      />
      <meta
        name="twitter:description"
        content="Your Guide to Troubleshooting Problems in FMHY."
      />
    </>
  ),
  // ... other theme options
  footer: {
    content: (
      <span>
        Attribution-ShareAlike (CC BY-SA) {new Date().getFullYear()} ©{" "}
        <a href="https://fmhy.lol" target="_blank" rel="noopener noreferrer">
          Zenith Rifle and other FMHY Members
        </a>
        !
      </span>
    ),
  },
};
