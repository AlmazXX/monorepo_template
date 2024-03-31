
# Monorepo Template

This repository serves as a template for quickly setting up a web development project with a Vite-based client and a Node.js API. It aims to provide a streamlined starting point for building modern web applications with a focus on speed, efficiency, and scalability.


##  External Dependencies

* Express
* Cors
* Axios
* React
* React-dom
* React-redux
* @reduxjs/toolkit
* React-router-dom


## Getting Started

Follow these steps to set up template for usage.


### Prerequisites

* Git
* GitHub CLI (optional)
* Node.js (version: >= 20.9.0)
* npm or yarn

### Creating a repository

To create a repository from this template please follow the guide from the [GitHub doc about repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)


### Creating a repository using GH CLI

1. Create a repository from the template:

```bash
    gh repo create test --template AlmazXX/monorepo_template --<VISIBILITY> --clone
```

2. Clone the created repository

```bash
    git clone https://github.com/<OWNER>/<REPO>.git
```

3. Navigate to the project directory:

```bash
    cd <REPO>
```

4. Install dependencies:

```bash
    npm install
```

### Usage

To start the project, run the following command:

```bash
    npm run dev
```
