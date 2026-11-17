# Shared A2UI design-to-implementation workflow

This repository contains the local A2UI Playground code. It is **not** the production codebase for MDE or iPix.

## Design and handoff

1. Generate and refine a design in the local Playground (iPix: http://localhost:3100; MDE uses a separate local copy at http://localhost:3500).
2. Export the final A2UI JSON and desktop/mobile screenshots into the corresponding local `exports/<project>/<feature>/` folder. These exports are **gitignored** because this repository is public; review them and use authorized project storage instead.
3. Have the coding agent inspect the target project's task requirements, current code, components, auth/data boundaries and CI before drafting a plan.
4. Create or update a reviewed Linear task in the appropriate project (IPI for iPix, SAN for MDE). Link the approved design files through a suitable secure storage location.
5. Implement the smallest compatible change in the target repository, not here. Reuse existing UI, services and auth. A2UI JSON is a design reference, not a source of server authorization or app logic.
6. Open a PR in the target repo, run its existing CI and appropriate real browser tests, compare screenshots, and seek human approval before merging or deploying.

## GitHub Actions ownership

- This repository's `Playground checks` workflow tests the Playground itself (typecheck, tests, build). No provider API keys are required for its deterministic checks.
- `amoai-tech/ipixai` runs the actual iPix app's CI and release checks.
- `amoai-tech/mdeai` runs MDE's existing `floor` and UI checks.
- GitHub Actions does not automatically create Linear tasks or production PRs from design exports: that requires authorized agent tooling and review.

## Local run

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Create `.env.local` from `.env.example` with your own model key. Never commit secrets.
