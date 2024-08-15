
# Accessibility DevOps demo

[![Node.js CI][ci-img]][ci] (_expected to fail!_)

This repository demonstrates integrating automated accessibility testing tools into a [continuous integration/deployment (CI/CD)][intro] workflow.

* [@nfreear/accessibility-ci-demo][demo1]
* [@nfreear/accessibility-devops][demo2] (_this repo._)

It demonstrates the use of [pa11y-ci][]. Also see [Cypress][], and this [blog post][].

The repo contains example _fails_ and _passes_ [pages](./pages)<!--, and corresponding unit tests-->.

## ⚠️✋ This project does not guarantee that what you build is accessible.

The GDS Accessibility team found that only [~30% of issues are found by automated testing][gds].

You'll also need to:
* test your interface with the [assistive technologies that real users use][at] (see also [WebAIM's survey results][survey]).
* include disabled people in user research.

[gds]: https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage
[at]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#when-to-test
[survey]: https://webaim.org/projects/screenreadersurvey10/#primary
  "Screen Reader Survey #10, 2024."
[pa11y-ci]: https://github.com/pa11y/pa11y-ci
[cypress]: https://www.cypress.io/
[blog post]: https://opensource.com/article/23/2/automated-accessibility-testing
  "Blog: example of performing accessibility tests in GitLab with Pa11y and Cypress, By Daniel Mundra, February 22, 2023"
[civic-repo]: https://gitlab.com/civicactions/accessibility
[wp-ci]: https://en.wikipedia.org/wiki/Continuous_integration
[wp-ops]: https://en.wikipedia.org/wiki/DevOps
[intro]: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/introduction-to-ci.md
  "Introduction to Continuous Integration (Google)"
[demo1]: https://github.com/nfreear/accessibility-ci-demo
  "#1 Demos use of 'jest-axe' and 'lighthouse-ci-action'"
[demo2]: https://github.com/nfreear/accessibility-devops
  "#2 Demos use of 'pa11y-ci'"

[ci]: https://github.com/nfreear/accessibility-devops/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/accessibility-devops/actions/workflows/node.js.yml/badge.svg
