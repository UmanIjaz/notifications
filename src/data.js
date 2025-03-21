const notifications = [
  {
    id: 1,
    user: "Mark Webber",
    img: "/public/assets/avatar-mark-webber.webp",
    type: "reaction",
    content: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    id: 2,
    user: "Angela Gray",
    img: "/public/assets/images/avatar-angela-gray.webp",
    type: "follow",
    content: null,
    time: "5m ago",
    read: false,
  },
  {
    id: 3,
    user: "Jacob Thompson",
    img: "/public/assets/avatar-jacob-thompson.webp",
    type: "group_join",
    content: "Chess Club",
    time: "1 day ago",
    read: false,
  },
  {
    id: 4,
    user: "Rizky Hasanuddin",
    img: "/public/assets/avatar-rizky-hasanuddin.webp",
    type: "private_message",
    content:
      "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true,
  },
  {
    id: 5,
    user: "Kimberly Smith",
    img: "/public/assets/avatar-kimberly-smith.webp",
    type: "comment",
    content: "your picture",
    time: "1 week ago",
    read: true,
  },
  {
    id: 6,
    user: "Nathan Peterson",
    img: "/public/assets/avatar-nathan-peterson.webp",
    type: "reaction",
    content: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    id: 7,
    user: "Anna Kim",
    img: "/public/assets/avatar-anna-kim.webp",
    type: "group_leave",
    content: "Chess Club",
    time: "2 weeks ago",
    read: true,
  },
];
export default notifications;
