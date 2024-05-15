# Pet

This is my pet. Just pet, no more.

## Quickstart

1. Setting Up Environment Variables and enter the correct values

```bash
cp example.env.local .env.local
```

2. Install dependecies

```bash
yarn
```

3. Run dev mode

```bash
yarn dev
```

Runs the project in development mode at `http://localhost:5173`

The page will reload if you make edits.

4. Building the app

```bash
yarn build
```

Creates the production build in the build folder.

The build is minified, and the filenames include hashes.

Your app is ready to be deployed!

## Project structure

```markdown
├── src/           # root
│   ├── apps/        # applications (views, pages - synonyms)
│   │   ├── app1/
│   │   │   ├── components/ # react components from app1 and only from it
│   │   │   ├── const/      # similarly, constants
│   │   │   ├── contexts/   # react contexts
│   │   │   ├── hooks/      # react hooks
│   │   │   ├── interfaces/ # interfaces from app1 and only from it
│   │   │   ├── types/      # types from app1 and only from it
│   │   │   ├── models/     # stores-models from app1 and only from it
│   │   │   ├── viewmodels/ # stores-view-models from app1 and only from it
│   │   │   ├── services/   # services specific to the app1 application (it is better to always put api-services on the general level)
│   │   │   ├── helpers/    # helper modules, eg. date, string converters, etc.
│   │   ├── ...
│   │   ├── appN/
│   │   │   ├── ...         # similar to app1
│   │
│   ├── components/  # common react components for 2+ applications
│   ├── const/       # common constants for 2+ applications
│   ├── contexts/    # similarly common react contexts
│   ├── hooks/       # common react hooks
│   ├── interfaces/  # common interfaces for 2+ applications
│   ├── types/       # common types for 2+ applications
│   ├── models/      # common stores-models for 2+ applications
│   ├── viewmodels/  # common stores-view-models for 2+ applications
│   ├── pages/       # What we pass to the router
│   ├── services/    # common services for 2+ applications (eg. API services or singletons)
│   ├── utils/       # helper modules, eg. date, string converters, etc. common for 2+ applications
```