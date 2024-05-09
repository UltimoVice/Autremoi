export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/admin",
        icon: "./src/assets/svg/house.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/admin",
        icon: "./src/assets/svg/people.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/admin",
        icon: "./src/assets/svg/people.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/prods",
        icon: "./src/assets/svg/cart.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/admin",
        icon: "./src/assets/svg/clipboard2-check.svg",
      },
      // {
      //   id: 4,
      //   title: "Post",
      //   url: "/admin",
      //   icon: "./src/assets/svg/newspaper.svg",
      // },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/admin",
        icon: "./src/assets/svg/grid.svg",
      },
      // {
      //   id: 2,
      //   title: "Notes",
      //   url: "/admin",
      //   icon: "./src/assets/svg/pencil-square.svg",
      // },
      // {
      //   id: 3,
      //   title: "Forms",
      //   url: "/admin",
      //   icon: "./src/assets/svg/list-columns-reverse.svg",
      // },
      // {
      //   id: 4,
      //   title: "Calendar",
      //   url: "/admin",
      //   icon: "./src/assets/svg/calendar3.svg",
      // },
    ],
  },
  {
    id: 4,
    title: "maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/admin",
        icon: "./src/assets/svg/gear.svg",
      },
      // {
      //   id: 2,
      //   title: "Backups",
      //   url: "/admin",
      //   icon: "./src/assets/svg/hdd.svg",
      // },
    ],
  },
  // {
  //   id: 5,
  //   title: "analytics",
  //   listItems: [
  //     {
  //       id: 1,
  //       title: "Charts",
  //       url: "/admin",
  //       icon: "./src/assets/svg/bar-chart-line.svg",
  //     },
  //     {
  //       id: 2,
  //       title: "Logs",
  //       url: "/admin",
  //       icon: "./src/assets/svg/book.svg",
  //     },
  //   ],
  // },
];

export const topDealUsers = [
  {
    id: 1,
    img: "src/assets/User/SerenaSmith.jpg",
    username: "SerenaSmith",
    email: "serenasmith@example.com",
    amount: "7200",
  },
  {
    id: 2,
    img: "src/assets/User/MaxPower88.jpg",
    username: "MaxPower88",
    email: "maxpower88@email.com",
    amount: "5400",
  },
  {
    id: 3,
    img: "src/assets/User/LilyRose22.jpg",
    username: "LilyRose22",
    email: "lilyrose22@example.net",
    amount: "4500",
  },
  {
    id: 4,
    img: "src/assets/User/Alex3000.jpg",
    username: "Alex3000",
    email: "alexgamer3000@emailprovider.org",
    amount: "4050",
  },
  {
    id: 5,
    img: "src/assets/User/SarahJenkins99.jpg",
    username: "SarahJenkins99",
    email: "sarah.jenkins99@example.com",
    amount: "3150",
  },
  {
    id: 6,
    img: "src/assets/User/Fashionista123.jpg",
    username: "Fashionista123",
    email: "fashionista123@example.com",
    amount: "3000",
  },
  {
    id: 7,
    img: "src/assets/User/ChicStyle22.jpg",
    username: "ChicStyle22",
    email: "chicstyle22@emailprovider.net",
    amount: "2860",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "src/assets/svg/people.svg",
  title: "Total Users",
  number: "9.564",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 400 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 800 },
    { name: "Fri", users: 400 },
    { name: "Sat", users: 500 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "src/assets/svg/people.svg",
  title: "Total Products",
  number: "238",
  dataKey: "product",
  percentage: 21,
  chartData: [
    { name: "Sun", product: 400 },
    { name: "Mon", product: 600 },
    { name: "Tue", product: 400 },
    { name: "Wed", product: 700 },
    { name: "Thu", product: 800 },
    { name: "Fri", product: 400 },
    { name: "Sat", product: 500 },
  ],
};
export const chartBoxRevenue = {
  color: "gold",
  icon: "src/assets/svg/people.svg",
  title: "Total Revenue",
  number: "€40.877",
  dataKey: "revenue",
  percentage: -16,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 400 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 800 },
    { name: "Fri", revenue: 400 },
    { name: "Sat", revenue: 500 },
  ],
};
export const chartBoxConversion = {
  color: "teal",
  icon: "src/assets/svg/people.svg",
  title: "Total Ratio",
  number: "9.564",
  dataKey: "ratio",
  percentage: 10,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 400 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 800 },
    { name: "Fri", ratio: 400 },
    { name: "Sat", ratio: 500 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "orange",
  dataKey: "profit",
  chartData: [
    { name: "Sun", profit: 4000 },
    { name: "Mon", profit: 6000 },
    { name: "Tue", profit: 4000 },
    { name: "Wed", profit: 7000 },
    { name: "Thu", profit: 8000 },
    { name: "Fri", profit: 4000 },
    { name: "Sat", profit: 5000 },
  ],
};

export const barChartBoxVisit = {
  title: "Profit Earned",
  color: "blue",
  dataKey: "visit",
  chartData: [
    { name: "Sun", visit: 4000 },
    { name: "Mon", visit: 6000 },
    { name: "Tue", visit: 4000 },
    { name: "Wed", visit: 7000 },
    { name: "Thu", visit: 8000 },
    { name: "Fri", visit: 4000 },
    { name: "Sat", visit: 5000 },
  ],
};

