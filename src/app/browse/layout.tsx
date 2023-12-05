"use client";
import Header from "./component/Header";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "主页", href: "#", current: true },
  { name: "节目", href: "#", current: false },
  { name: "电影", href: "#", current: false },
  { name: "新鲜热播", href: "#", current: false },
  { name: "我的列表", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header user={user} navigation={navigation} userNavigation={userNavigation} />
      <main className="overflow-auto">{children}</main>
    </>
  );
}
