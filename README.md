# Treasure Log website

A buildless static site for Treasure Log, the native iPhone app. Published website files are kept in `docs/`; internal review material remains outside that directory.

## Preview locally

From this project folder, run:

```sh
python3 -m http.server 8000 --directory docs
```

Then open <http://localhost:8000>. Press Control-C to stop the server. Serving only `docs/` keeps internal screenshots and review notes outside the preview server.

## Pages and hosting

- Home: `/`
- Support: `/support/`
- Privacy Policy: `/privacy/`
- Terms of Use: `/terms/`

GitHub Pages is the intended initial host. Select the `docs` folder as the publishing source; the project site is designed for `https://evenmatter.github.io/treasurelog-website/`. All page, navigation, stylesheet, font, and asset references are relative. The site has no build step or paid dependency.

## Assets and publication gate

- `docs/assets/brand/treasurelog-logo.png` is copied from the approved Phase 7 branding master in the native project.
- `docs/assets/brand/moonlit-cove.png` is the original handoff `empty-cove.png`.
- `docs/assets/brand/treasure-chest.png` is the original handoff `chest.png`.
- `docs/assets/fonts/oxanium.ttf` includes its SIL Open Font License notice in `docs/assets/fonts/OFL.txt`.
- `docs/assets/screenshots/` contains genuine native-app simulator screenshots with fixture demonstration data.

The project owner has confirmed Drake’s permission to use, modify, market, and commercially distribute the original AI-generated Treasure Log artwork. This records permission to use the artwork; it does not claim exclusive copyright ownership. Keep Oxanium’s OFL notice with the bundled font.

## Publication dates

The Privacy Policy and Terms of Use currently show an effective date of October 18, 2026. Review the dates before publication if the actual publication date differs. The shared support, privacy, and general contact for Treasure Log, Quested, and future Evenmatter apps is evenmatterdev@gmail.com.
