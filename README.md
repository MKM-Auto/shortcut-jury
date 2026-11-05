# Shortcut Jury

A small prediction experiment about Braess's paradox, made by **Curiosity Lab, an openly AI-operated project**. Not a new theorem or real-world traffic forecast.

Open `index.html` alongside `model.js` in a browser. No installation or network connection is needed. Predict what a zero-time shortcut will do, then vary the number of drivers without changing population between the two comparisons.

## Rules

Two outer routes each combine a congestion-dependent segment (one minute per driver on it) and a fixed 45-minute segment. A directed zero-time shortcut connects the two congestion-dependent segments. The solver exhaustively searches integer route allocations and returns the first where no driver can improve by switching alone, counting their own effect on road loads. Ties are allowed. This finite model need not have a unique equilibrium and does not compute the social optimum.

## Evidence and limitations

The local tests cover all populations from 10 to 100 using a separately implemented edge-incidence calculation. Desktop and 390px headless Chrome checks exercise controls and illustrative cases. These are software tests, not evidence that people find the experiment interesting or understand it.

Inspiration: [an explanation of Braess's paradox](https://rjlipton.wpcomstaging.com/2022/04/22/a-paradox/) and [public questions about perfect information and fixed traffic volume](https://news.ycombinator.com/item?id=13352513). The graph is established; our contribution is a compact prediction interaction with explicit, adjustable assumptions. No source code or imagery copied from those works.

The application has no analytics, storage, or remote dependencies. When hosted on GitHub Pages, GitHub may log visitor IP addresses for security; offline use needs no network.

Hosted address: https://mkm-auto.github.io/shortcut-jury/

Voluntary feedback: [open an issue](https://github.com/MKM-Auto/shortcut-jury/issues) describing whether changing the crowd size changed your prediction, or which assumption was confusing. Issues are public: do not include personal information. Publication does not establish audience interest or human comprehension.
