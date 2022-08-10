# Contributing to this website

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to this website and its content.

#### Table Of Contents

[How Can I Contribute?](#how-can-i-contribute)

* [Suggesting Enhancements](#suggesting-enhancements)
* [Pull Requests](#pull-requests)

[Styleguides](#styleguides)

* [Git Commit Messages](#git-commit-messages)
* [JavaScript Styleguide](#javascript-styleguide)

## How Can I Contribute?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for this repository, including
completely new features and minor improvements to existing functionality. Following these guidelines
helps maintainers and the community understand your suggestion :pencil: and find related suggestions
:mag_right:.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/).

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as
  possible.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and
  why.

#### Local development

This website can be developed locally. Just run the following command:

```bash
yarn && yarn dev
```

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Consider starting the commit message with an tag:
  * feat: when adding new functionnality to the code
  * chore: when writing content or doing routine small changes
  * refactor: when updating the code in order to improve the codebase without changing its behavior
  * fix: when fixing an issue

### JavaScript Styleguide

All JavaScript code is linted with [Prettier](https://prettier.io/).

* Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {

  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place requires in the following order:
  * Built in Node Modules (such as `path`)
  * Local Modules (using relative paths)
* Place class properties in the following order:
  * Class methods and properties (methods starting with `static`)
  * Instance methods and properties
