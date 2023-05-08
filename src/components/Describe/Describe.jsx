import React from "react";
import { MdSecurity } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { RiVipCrown2Line } from "react-icons/ri";

Describe.propTypes = {};

function Describe(props) {
  return (
    <section className="my-10">
      <div className="text-center">
        <p className="text-4xl font-bold py-1 pb-6">About us</p>
        <div className="container mx-auto grid gap-10 md:grid-cols-3">
          <div>
            <VscWorkspaceTrusted size={50} className="block mx-auto mb-4" />
            <p className="text-3xl font-bold pb-4">charisma</p>
            <p className="text-justify pb-4 px-4 md:px-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <MdSecurity size={50} className="block mx-auto mb-4" />
            <p className="text-3xl font-bold pb-4">Responsibility</p>
            <p className="text-justify pb-4 px-4 md:px-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div>
            <RiVipCrown2Line size={50} className="block mx-auto mb-4" />
            <p className="text-3xl font-bold pb-4">Good product</p>
            <p className="text-justify pb-4 px-4 md:px-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Describe;
