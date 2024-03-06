# Learn with #14Days Of DataScience

## 1. Learning Objectives

- Understand core Data Science Concepts
- Explore core Data Science Tools
- Learn to Analyze & Visualize Data with AI help
- Learn to Debug & Assess Models for Responsible AI
- Build your intuition & skills with hands-on exercises

## 2. Dev Container

The project is instrumented with a `devcontainer.json` based on the **codespaces-jupyter** example from GitHub. The configuration has been enhanced to add additional package dependencies required for exercises. We'll use this section to update the list of dependencies as we go:

| Requirement | Description |
|:---|:---|
| `openai` | Support usage of OpenAI Python library for relevant exercises |
| | |


## 3. Astro Starlight Setup

[Astro Starlight](https://starlight.astro.build/getting-started/) is the Astro theme for documentation. We'll use this to create a documentation site for recording the learning journey under the `docs/` folder. Check out [docs/README.md](./docs/README.md) for more details.

To preview the documentation site:
```bash
cd docs;
npm install && npm run dev
```