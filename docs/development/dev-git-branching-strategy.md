---
sidebar_position: 1
---

# Git Branching Strategy

Naming conventions for branches when using Git Flow, as well as how to handle multiple developers working on the same feature or bugfix

## Main branches:

- main
- develop

## Supporting branches:

- feature/
- release/
- hotfix/
- bugfix/
- support/

## Naming conventions for each branch type:

- Main branch (the branch that is in production environment): `main`
- Development branch (the branch that all the pull requests should come to): `develop`
- Feature branch: `feature/<feature-name>`
- Release branch: `release/<environment-name>`
- Hotfix branch: `hotfix/<hotfix-name>`
- Bugfix branch: `bugfix/<bug-name>`
- Support branch: `support/<support-name>`

## When multiple developers work on the same feature or bugfix:

e.g. When John and Jack are working on the same feature or bugfix, you can use one of these approaches:

a. Shared branch:

- `feature/user-authentication`
- `bugfix/login-error`

b. Personal sub-branches:

- `feature/user-authentication/john`
- `feature/user-authentication/jack`
- `bugfix/login-error/john`
- `bugfix/login-error/jack`

c. Task-based branches:

- `feature/user-authentication/frontend`
- `feature/user-authentication/backend`
- `bugfix/login-error/database`
- `bugfix/login-error/ui`
