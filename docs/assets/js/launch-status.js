// Launch transition: edit this configuration once the verified App Store listing is live.
// Set availability to "available" and add the verified URL; releaseDate is optional.
(() => {
  const release = {
    availability: "coming-soon",
    appStoreUrl: "",
    releaseDate: ""
  };

  let storeUrl = null;
  try {
    const candidate = new URL(release.appStoreUrl);
    if (candidate.protocol === "https:" && candidate.hostname === "apps.apple.com" && candidate.pathname.includes("/app/")) {
      storeUrl = candidate.href;
    }
  } catch {
    // An empty or unverified URL keeps the public availability status at Coming Soon.
  }

  const isAvailable = release.availability === "available" && storeUrl !== null;
  const status = isAvailable ? "Available Now" : "Coming Soon";

  document.querySelectorAll("[data-launch-status]").forEach((element) => {
    element.textContent = status;
  });

  const setStoreLink = (link) => {
    link.href = storeUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  };

  document.querySelectorAll("[data-store-cta]").forEach((link) => {
    if (isAvailable) {
      setStoreLink(link);
    } else if (link.dataset.fallbackHref) {
      link.href = link.dataset.fallbackHref;
    }
  });

  document.querySelectorAll("[data-app-store-link]").forEach((link) => {
    if (isAvailable) {
      setStoreLink(link);
      link.hidden = false;
    }
  });

  document.querySelectorAll("[data-coming-soon]").forEach((element) => {
    element.hidden = isAvailable;
  });

  document.querySelectorAll("[data-availability-message]").forEach((element) => {
    element.textContent = isAvailable
      ? "Treasure Log is available on the App Store."
      : "Treasure Log is coming soon to the App Store.";
  });

  document.querySelectorAll("[data-release-date]").forEach((element) => {
    if (isAvailable && release.releaseDate) {
      element.textContent = `Release date: ${release.releaseDate}`;
      element.hidden = false;
    }
  });
})();
