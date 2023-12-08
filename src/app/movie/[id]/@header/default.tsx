import Header from "../../../../components/Header";

const navigation = [
  { name: "主页", href: "/browse", current: true },
  { name: "节目", href: "/browse", current: false },
  { name: "电影", href: "/browse", current: false },
  { name: "新鲜热播", href: "/browse", current: false },
  { name: "我的列表", href: "/browse", current: false },
];

const header = () => {
  return <Header navigation={navigation} />;
};

export default header;
