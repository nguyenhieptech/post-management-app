import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'user1@gmail.com',
    posts: {
      create: [
        {
          title: 'Introducing React',
          description: 'The library for web and native user interfaces',
          content:
            'React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React. If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.',
        },
        {
          title: 'Introducing Vue',
          description: 'The Progressive JavaScript Framework',
          content:
            "Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these. If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more detail in Ways of Using Vue.",
        },
        {
          title: 'Introducing React Native',
          description: 'Learn once, write anywhere.',
          content:
            'Create native apps for Android, iOS, and more using React. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little- or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch. React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do. Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain multiple platforms and share a common technology - React.',
        },
        {
          title: 'Introducing NextJS: The React Framework for the Web',
          description:
            'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.',
          content:
            "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration. Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.",
        },
        {
          title: 'Introducing NestJS',
          description:
            'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
          content:
            'It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well! Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform. In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture. Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.',
        },
        {
          title: 'Introducing NodeJS',
          description: 'An asynchronous event-driven JavaScript runtime',
          content:
            "Node.js is designed to build scalable network applications. In the following 'hello world' example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.",
        },
        {
          title: 'Introducing TypeScript',
          description: 'JavaScript with syntax for types',
          content:
            'Over 20 years after its introduction to the programming community, JavaScript is now one of the most widespread cross-platform languages ever created. Starting as a small scripting language for adding trivial interactivity to webpages, JavaScript has grown to be a language of choice for both frontend and backend applications of every size. While the size, scope, and complexity of programs written in JavaScript has grown exponentially, the ability of the JavaScript language to express the relationships between different units of code has not. Combined with JavaScript’s rather peculiar runtime semantics, this mismatch between language and program complexity has made JavaScript development a difficult task to manage at scale. The most common kinds of errors that programmers write can be described as type errors: a certain kind of value was used where a different kind of value was expected. This could be due to simple typos, a failure to understand the API surface of a library, incorrect assumptions about runtime behavior, or other errors. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked). If you are coming to TypeScript without a JavaScript background, with the intention of TypeScript being your first language, we recommend you first start reading the documentation on either the Microsoft Learn JavaScript tutorial or read JavaScript at the Mozilla Web Docs. If you have experience in other languages, you should be able to pick up JavaScript syntax quite quickly by reading the handbook.',
        },
      ],
    },
    // Go to https://argon2.online to generate a password hash - "password"
    hashed_password: '$argon2i$v=19$m=16,t=2,p=1$dXhZcU55OWZQN3VaMlR0Uw$IzXr9MveFRCsSSe4uSJy/w',
  },
  {
    email: 'user2@gmail.com',
    posts: {
      create: [
        {
          title: 'Building apps with React',
          description: 'The library for web and native user interfaces',
          content:
            'React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React. If you want to build a new app or a new website fully with React, we recommend picking one of the React-powered frameworks popular in the community. Frameworks provide features that most apps and sites eventually need, including routing, data fetching, and generating HTML.',
        },
        {
          title: 'Building apps with Vue',
          description: 'The Progressive JavaScript Framework',
          content:
            "Vue is a framework and ecosystem that covers most of the common features needed in frontend development. But the web is extremely diverse - the things we build on the web may vary drastically in form and scale. With that in mind, Vue is designed to be flexible and incrementally adoptable. If you find these concepts intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge, and you should be able to follow along without being an expert in any of these. If you are an experienced developer interested in how to best integrate Vue into your stack, or you are curious about what these terms mean, we discuss them in more detail in Ways of Using Vue.",
        },
        {
          title: 'Building apps with React Native',
          description: 'Learn once, write anywhere.',
          content:
            'Create native apps for Android, iOS, and more using React. React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. Use a little- or a lot. You can use React Native today in your existing Android and iOS projects or you can create a whole new app from scratch. React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do. Many platforms, one React. Create platform-specific versions of components so a single codebase can share code across platforms. With React Native, one team can maintain multiple platforms and share a common technology - React.',
        },
        {
          title: 'Building apps with NextJS: The React Framework for the Web',
          description:
            'Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.',
          content:
            "Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations. Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration. Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.",
        },
        {
          title: 'Building apps with NestJS',
          description:
            'Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications',
          content:
            'It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Under the hood, Nest makes use of robust HTTP Server frameworks like Express (the default) and optionally can be configured to use Fastify as well! Nest provides a level of abstraction above these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to use the myriad of third-party modules which are available for the underlying platform. In recent years, thanks to Node.js, JavaScript has become the “lingua franca” of the web for both front and backend applications. This has given rise to awesome projects like Angular, React and Vue, which improve developer productivity and enable the creation of fast, testable, and extensible frontend applications. However, while plenty of superb libraries, helpers, and tools exist for Node (and server-side JavaScript), none of them effectively solve the main problem of - Architecture. Nest provides an out-of-the-box application architecture which allows developers and teams to create highly testable, scalable, loosely coupled, and easily maintainable applications. The architecture is heavily inspired by Angular.',
        },
        {
          title: 'Building apps with NodeJS',
          description: 'An asynchronous event-driven JavaScript runtime',
          content:
            "Node.js is designed to build scalable network applications. In the following 'hello world' example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep. This is in contrast to today's more common concurrency model, in which OS threads are employed. Thread-based networking is relatively inefficient and very difficult to use. Furthermore, users of Node.js are free from worries of dead-locking the process, since there are no locks. Almost no function in Node.js directly performs I/O, so the process never blocks except when the I/O is performed using synchronous methods of Node.js standard library. Because nothing blocks, scalable systems are very reasonable to develop in Node.js.",
        },
        {
          title: 'Introducing TypeScript',
          description: 'JavaScript with syntax for types',
          content:
            'Over 20 years after its introduction to the programming community, JavaScript is now one of the most widespread cross-platform languages ever created. Starting as a small scripting language for adding trivial interactivity to webpages, JavaScript has grown to be a language of choice for both frontend and backend applications of every size. While the size, scope, and complexity of programs written in JavaScript has grown exponentially, the ability of the JavaScript language to express the relationships between different units of code has not. Combined with JavaScript’s rather peculiar runtime semantics, this mismatch between language and program complexity has made JavaScript development a difficult task to manage at scale. The most common kinds of errors that programmers write can be described as type errors: a certain kind of value was used where a different kind of value was expected. This could be due to simple typos, a failure to understand the API surface of a library, incorrect assumptions about runtime behavior, or other errors. The goal of TypeScript is to be a static typechecker for JavaScript programs - in other words, a tool that runs before your code runs (static) and ensures that the types of the program are correct (typechecked). If you are coming to TypeScript without a JavaScript background, with the intention of TypeScript being your first language, we recommend you first start reading the documentation on either the Microsoft Learn JavaScript tutorial or read JavaScript at the Mozilla Web Docs. If you have experience in other languages, you should be able to pick up JavaScript syntax quite quickly by reading the handbook.',
        },
      ],
    },
    // Go to https://argon2.online to generate a password hash - "password"
    hashed_password: '$argon2i$v=19$m=16,t=2,p=1$dXhZcU55OWZQN3VaMlR0Uw$IzXr9MveFRCsSSe4uSJy/w',
  },
];

const postData: Prisma.PostCreateInput[] = [
  {
    title: 'Crafting a design system for a better future',
    description:
      'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
    content:
      'Ungues fistula annoso, ille addit linoque motatque uberior verso rubuerunt Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur levitate quas ubi arcum ripas oculos abest confine desuetaque. Sanguine anteit emerguntque expugnacior est pennas iniqui ecce haeret genus: peiora imagine fossas Cephisos formosa! Refugitque amata refelli supplex. Summa brevis vetuere tenebas, hostes vetantis, suppressit, arreptum regna. Postquam conpescit iuvenis habet corpus, et erratica, perdere, tot mota ars talis',
  },
  {
    title: 'Introducing Animaginary: High performance web animations',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    content:
      'Deus feram verumque, fecit, ira tamen, terras per alienae victum. Mutantur levitate quas ubi arcum ripas oculos abest. Adest commissaque victae in gemitus nectareis ire diva dotibus ora, et findi huic invenit; fatis? Fractaque dare superinposita nimiumque simulatoremque sanguine, at voce aestibus diu! Quid veterum hausit tu nil utinam paternos ima, commentaque.',
  },
  {
    title: 'Introducing Flexbox: CSS Flexbox',
    description:
      'When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.',
    content:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.',
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
