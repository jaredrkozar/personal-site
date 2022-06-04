import React from "react";
import codeImg from  "../Images/code.jpeg";

function Header() {
  return (
<div class="relative w-screen h-80 overflow-hidden">
  <img src={codeImg} alt="Avatar" class="bg-gradient-to-r from-blue-500 to-transparent opacity-30 object-cover w-full h-full" />
  <div class="absolute w-full py-2.5 top-10 inset-x-0 text-6xl font-bold dark:text-white left-10">Hi, I'm Jared Kozar.</div>
  <div class="absolute w-full bottom-3 text-4xl dark:text-white left-10 mr-[83px]">I am a junior majoring in computer science at the University of Hartford. I enjoy developing apps that help users, especially those who are visually impaired, improve their productivity on their iPhone, iPad, Mac, and Apple Watch. </div>


</div>
  );
}

export default Header;