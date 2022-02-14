import React from "react";

export default function Home() {
  return (
    <div className="flex flex-wrap text-justify mt-12 bg-gradient-to-br from-white to-blue-500 py-16">
      <div className="flex h-32 w-32 items-center justify-center">
        <img
          className="ml-4 rounded-full border border-gray-100 shadow-s mb-8"
          src="https://randomuser.me/api/portraits/lego/5.jpg"
          alt="user image"
        />
      </div>
      <h1 className="flex flex-wrap text-justifytext-3xl font-bold ml-8 mt-8">
        Hello 👋 I'm Vahan
      </h1>
      <p className="ml-2 mr-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}
