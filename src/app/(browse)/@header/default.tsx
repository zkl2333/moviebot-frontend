import Header from "../../../components/Header";

const navigation = [
  { name: "主页", href: "/", current: true },
  { name: "节目", href: "/", current: false },
  { name: "电影", href: "/", current: false },
  { name: "新鲜热播", href: "/", current: false },
  { name: "我的列表", href: "/", current: false },
];

const header = () => {
  return <Header navigation={navigation} />;
};

export default header;
