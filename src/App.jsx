import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import {
  UserRound,
  ListTodo,
  GalleryHorizontal,
  Home,
  Settings,
  Mail,
  BookMarked,
  Info,
} from "lucide-react";
import "./index.css";

import arisu from "./assets/arisu_caupng.png"
import reisa from "./assets/reisa_rkgk.png"

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50 select-none overflow-x-hidden">
      <TopBar />
      {/* flex-grow 로 남은 영역 차지 & viewport 높이에 맞게 중앙 배치 */}
      <main className="flex flex-1 items-center justify-center px-4 py-10">
        <div className="w-full max-w-5xl">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<Placeholder name="News" />} />
            <Route path="/settings" element={<Placeholder name="Settings" />} />
            <Route path="/contact" element={<Placeholder name="Contact" />} />
            <Route path="/notes" element={<Placeholder name="Notes" />} />
          </Routes>
        </div>
      </main>
      <BottomNav />
    </div>
  );
}

function TopBar() {
  return (
    <header className="w-full bg-white/80 backdrop-blur shadow-sm py-2 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="font-extrabold text-xl tracking-wide">ArfiTech</h1>
        <div className="flex gap-4 text-sm whitespace-nowrap">
          <span>⚡️ <b>Lv&nbsp;93</b></span>
          <span>💉 86/178</span>
          <span>💰 467,150</span>
        </div>
      </div>
    </header>
  );
}

function Dashboard() {
  return (
    <section className="flex flex-col items-center text-center gap-4">
      <img
        src={arisu}
        alt="Arisu Tachibana"
        className="max-h-[320px] object-contain drop-shadow-lg"
      />
      <p className="text-xl font-semibold">サイト開発中</p>
      <p className="text-gray-600">私の前にはレイサちゃんとコユキちゃんのキーホルダーがあります。</p>
    </section>
  );
}

function About() {
  return (
    <section className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">약력 (Resume)</h2>
      <ul className="space-y-2 list-disc list-inside">
        <li><strong>2024.01 – Present:</strong> AI Developer, Nexon Ngine Studios</li>
        <li><strong>2020.03 – 2024.02:</strong> B.S. in Computer Science and Engineering, Chung-Ang Univ. (4.2/4.5 GPA)</li>
      </ul>
    </section>
  );
}

function Activities() {
  return (
    <section className="max-w-2xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold">활동 (Activities)</h2>
      <ul className="list-disc list-inside space-y-1">
        <li>CAU 공학학술제 소프트웨어학장상 수상 (2023)</li>
        <li>중앙대학교 언어교환 프로그램(일본어) 한국어 멘토 (2023)</li>
        <li>CAU LINC 3.0 FESTIVAL CAPSTONE DESIGN AWARDS 장려상 수상 (2022)</li>
        <li>2022 다빈치 오픈소스 SW/AI 딥러닝 해커톤 대상 수상 (2022)</li>
        <li>미성중학교 방과후학교 교육봉사 (2022)</li>
        <li>SW 유학생 전공 교육 멘토링 멘토 (2022)</li>
        <li>SW전공학습튜터링 튜터 (2021 - 2022)</li>
        <li>2021 다빈치 오픈소스 SW/AI 딥러닝 해커톤 우수상 수상 (2021)</li>
        <li>2020 대구경북 SW 문제해결능력 경진대회 입선 (2020)</li>
        <li>KC미래장학재단 제5기 (2022 - 2024)</li>
        <li>신라문화장학재단 장학생 (2021 - 2024)</li>
        <li>JLPT N1 (2025)</li>
        <li>TOIEC 775 (2023)</li>
        <li>상공회의소한자 3급 (2022)</li>
        <li>정보처리기능사 (2013)</li>
      </ul>
    </section>
  );
}

function Gallery() {
  const images = [
    {
      src: {reisa},
      alt: "reisa chan",
      caption: "可愛いレイサちゃんを描いてみました",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-2">
      <h2 className="text-2xl font-bold mb-6 text-center">갤러리 (Gallery)</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <figure key={img.src} className="bg-white rounded-xl shadow overflow-hidden">
            <img src={img.src} alt={img.alt} className="w-full h-48 object-cover" />
            <figcaption className="p-4 text-sm text-gray-700">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Placeholder({ name }) {
  return (
    <div className="text-center text-gray-500">
      <p className="text-lg font-medium mb-2">{name}</p>
      <p>何があったらいいかな</p>
    </div>
  );
}

function BottomNav() {
  const menu = [
    { to: "/", label: "메인", icon: Home },
    { to: "/about", label: "약력", icon: UserRound },
    { to: "/activities", label: "활동", icon: ListTodo },
    { to: "/gallery", label: "갤러리", icon: GalleryHorizontal },
    { to: "/news", label: "뉴스", icon: BookMarked },
    { to: "/settings", label: "설정", icon: Settings },
    { to: "/contact", label: "연락", icon: Mail },
    { to: "/notes", label: "노트", icon: Info },
  ];

  return (
    <nav className="sticky bottom-0 w-full bg-white/90 backdrop-blur shadow-inner">
      <ul className="w-full flex justify-around list-none">
        {menu.map(({ to, label, icon: Icon }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              className={({ isActive }) =>
                `py-3 flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
                  isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-500"}
              `}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}