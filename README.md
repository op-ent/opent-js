# @op-ent/opent-js

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions][github-actions-src]][github-actions-href]
[![bundle][bundle-src]][bundle-href]
[![Codecov][codecov-src]][codecov-href]
[![MIT License][license-src]][license-href]

opent-js est un client javascript pour l'[API](https://github.com/op-ent/api) d'op-ent.

## Usage

Ce package n'est pas encore disponible sur NPM.

## Développer

### Prérequis

-   [Node.js](https://nodejs.org/en/)
-   [Git](https://git-scm.com/)
-   [Yarn v1](https://classic.yarnpkg.com/en/docs/install)
-   [Setup l'API](https://github.com/op-ent/api)

### Installation & configuration

Exécuter `yarn` pour installer les dépendances.

### Lancement

Exécuter `yarn dev` pour lancer le serveur de développement.

En développement, il faut passer en paramètre du client une `baseUrl` différente :

```js
import { createClient } from '@op-ent/opent-js'

const client = createClient({
    accessId: process.env.ACCESS_ID,
    accessToken: process.env.ACCESS_TOKEN,
    baseUrl: 'http://localhost:3333', // <--- URL de l'API en local
})
```

## License

Published under [MIT License](./LICENSE).

Made with ❤️ by [authorName]() in France.

---

<table>
  <thead>
    <tr>
      <th colspan="2">Sponsors</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://www.netlify.com" target="_blank">
          <img alt="Netlify banner" height="51px" src="https://www.netlify.com/v3/img/components/netlify-color-accent.svg" />
        </a>
      </td>
      <td>
        <a href="https://cleavr.io" target="_blank">
          <img alt="Cleavr banner" height="51px" src="https://hcti.io/v1/image/ae9a047f-22b3-4016-a37a-80f297894678" />
        </a>
      </td>
    </tr>
  </tbody>
</table>

<!-- Badges -->
<!-- https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba -->

[npm-version-src]: https://img.shields.io/npm/v/packageName?style=flat-square
[npm-version-href]: https://npmjs.com/package/packageName
[npm-downloads-src]: https://img.shields.io/npm/dm/packageName?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/packageName
[github-actions-src]: https://img.shields.io/github/workflow/status/op-ent/packageName/ci/main?style=flat-square
[github-actions-href]: https://github.com/op-ent/packageName/actions?query=workflow%3Aci
[bundle-src]: https://img.shields.io/bundlephobia/minzip/packageName?style=flat-square
[bundle-href]: https://bundlephobia.com/result?p=packageName
[codecov-src]: https://img.shields.io/codecov/c/gh/op-ent/packageName/main?style=flat-square
[codecov-href]: https://codecov.io/gh/op-ent/packageName
[license-src]: https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square
[license-href]: ./LICENSE
