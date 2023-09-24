# Post Management App

## Backend

- Techstack: NestJS (Fastify), Prisma ORM

- Set up

```bash
# Open a terminal inside backend folder if needed
cd backend

# Install dependencies
yarn install
```

- After that, set up a local Postgresql database. This step varies on different systems. Find online tutorials to set up. Then, create a `.env` file and change update your database URL.

```env
DATABASE_URL="postgresql://your-user:your-password@localhost:5432/your-db-name?schema=public"
JWT_SECRET="Change to your JWT secret"
```

- Let's move on to Prisma

```bash
# Generate prisma
npx prisma generate
# or yarn prisma:generate

# Migrate prisma schema to db
npx prisma migrate dev
 # or yarn prisma:migrate

# Seed database if needed
npx prisma db seed
# or yarn prisma:seed

# After that, open prisma studio
npx prisma studio
# or yarn prisma:studio
```

- Run project locally

```bash
# Start backend web server
yarn start:dev
```

- After seeding database successfully, there are 2 initial users, each user has 7 posts. One can login with these accounts, or create a new one.

  - User 1

    - email: user1@gmail.com
    - password: password

  - User 2

    - email: user2@gmail.com
    - password: password

## Set up Frontend

- Techstack: React (Vite), ShadcnUI, Tailwind CSS, Redux Toolkit

- Set up: open a new terminal

```bash
# Open a terminal inside frontend folder if needed
cd frontend

# Install dependencies
yarn install
```

- After that, run project locally

```bash
yarn dev
```

- Once again, one can login with these users:

  - User 1:

    - email: user1@gmail.com
    - password: password

  - User 2:

    - email: user2@gmail.com
    - password: password
