//Guide
---

# Environment Setup & Getting Started

This guide walks you through configuring the environment variables and running the project services using Docker Compose.

## Prerequisites

Before starting, ensure you have the following installed on your system:

* **Docker**
* **Docker Compose**

---

## Installation Steps

### Step 1: Create the `.env` File

The project requires a `.env` file at the root directory to manage configuration. Copy the provided template file to create your local environment file:

```bash
cp .env.example .env

```

### Step 2: Update Configuration Values

Open the newly created `.env` file in your preferred text editor and update the values as needed. This includes:

* Database credentials
* API keys and secrets
* Service ports

> ⚠️ **Important:** Do **NOT** commit your `.env` file to version control. It contains sensitive data and has already been added to the `.gitignore` file to prevent accidental leaks.

### Step 3: Launch the Services

Once your environment variables are configured, build and start the application containers using Docker Compose:

```bash
docker-compose up --build

```

---

## Architecture Notes

* **`.env.example`:** Contains a blueprint of all required environment variables with dummy/default values. Always keep this file updated if you add new configuration keys.
* **`.env`:** Your local, runtime-specific configuration.
* **Docker Integration:** Each service automatically injects and reads these environment variables via the `docker-compose.yml` configuration.

---

## Troubleshooting

### ❗ Missing Configuration Error

If the services fail to start or crash immediately upon launch, double-check that your `.env` file exists and is populated.

**Symptoms of a missing `.env` file:**

* Docker container exits abruptly.
* Logs report missing database strings or secret keys.
* Docker Compose throws a warning about missing variable declarations.