
# Accessibility DevOps demo

[![Node.js CI][ci-img]][ci]

This repository demonstrates integrating automated accessibility testing tools into a continuous integration/deployment (CI/CD) workflow.

It demonstrates the use of [pa11y-ci][]. Also see [Cypress][], and this [blog post][].

The repo contains example _fails_ and _passes_ [pages](./pages), and corresponding unit tests.

## ⚠️✋ This project does not guarantee that what you build is accessible.
The GDS Accessibility team found that only [~30% of issues are found by automated testing][gds].

[gds]: https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage
[at]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#when-to-test
[survey]: https://webaim.org/projects/screenreadersurvey8/#primary
[pa11y-ci]: https://github.com/pa11y/pa11y-ci
[cypress]: https://www.cypress.io/
[blog post]: https://opensource.com/article/23/2/automated-accessibility-testing
  "Blog: example of performing accessibility tests in GitLab with Pa11y and Cypress, By Daniel Mundra, February 22, 2023"

[ci]: https://github.com/nfreear/accessibility-devops/actions/workflows/node.js.yml
[ci-img]: https://github.com/nfreear/accessibility-devops/actions/workflows/node.js.yml/badge.svg
