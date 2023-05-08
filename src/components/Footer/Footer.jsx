import React from "react";

function Footer(props) {
  return (
    <section className="bg-gradient-to-b from-gray-700 via-gray-900 to-black text-white">
      <div className="container mx-auto pt-10 p-4">
        <div className="block justify-between leading-8 md:flex">
          <div className="px-6 mb-4 md:w-1/2 md:p-0">
            <div className="text-2xl font-bold pb-3">Quang Huy</div>
            <p className="text-justify text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="px-6 md:w-1/2">
            <div className="text-2xl font-bold pb-3">Contact</div>
            <ul className="list-contact">
              <li className="text-gray-400">
                <a href="tel:0329185058">Phone: 0329185058</a>
              </li>
              <li className="text-gray-400">
                <a href="mail:quanghuyhgkma@gmail.com">
                  Email: quanghuyhgkma@gmail.com
                </a>
              </li>
              <li className="text-gray-400">Address: Cầu Giấy, Hà Nội</li>
            </ul>
          </div>
        </div>
        <div className="text-white text-center px-4 py-2">
          Copyright © 2023 Quang Huy
        </div>
      </div>
    </section>
  );
}

export default Footer;
