import React from "react";

const NFTGrid = () => {
  const nfts = [
    {
      id: 1,
      title: "10K+ Winners",
      image: "imagephone (1).png",
      price:
        "If you've received the airdrop, it means you're one of the lucky random winners selected in our event.",
      label: "Sale 1",
    },
    {
      id: 2,
      title: "NFT 2",
      image: "imagephone (2).png",
      price:
        "If you've received the airdrop, it means you're one of the lucky random winners selected in our event.",
      label: "Sale 2",
    },
    // {
    //   id: 3,
    //   title: "NFT 3",
    //   image: "imagephone (3).png",
    //   price:
    //     "If you've received the airdrop, it means you're one of the lucky random winners selected in our event.",
    //   label: "Sale 3",
    // },
    // {
    //   id: 4,
    //   title: "NFT 4",
    //   image: "imagephone (3).png",
    //   price:
    //     "If you've received the airdrop, it means you're one of the lucky random winners selected in our event.",
    //   label: "Sale 4",
    // },
  ];

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8 min-h-[581px]">
      {nfts.map((nft) => (
        <div
          key={nft.id}
          className={`relative group overflow-hidden rounded-lg min-h-[581px] ${
            nft.id === 1 ? "border-2 border-blue-950" : ""
          } ${nft.id === 2 ? "border-2 border-blue-950" : ""}`}
        >
          {/* Circle blur rounded góc trái */}
          <div className="absolute top-4 left-4 w-[100px] h-[100px] rounded-full bg-primaryGradient blur-[100px] z-0"></div>

          {/* Ảnh NFT */}
          <img
            src={nft.image}
            alt={nft.title}
            className={`relative z-10 w-full h-full object-cover rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105`}
          />

          {/* Lớp màu gradient đen xám che ảnh khi hover */}
          <div className="absolute inset-1 bg-SuperBlueGradient opacity-0 group-hover:opacity-50 transition-opacity duration-300  z-20"></div>

          {/* Nội dung chỉ hiện khi hover */}
          <div className="absolute inset-0 z-30 flex flex-col justify-center items-center mx-[20px] my-[500px] text-white text-center bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl m-5">{nft.title}</h3>

            {/* Hiệu ứng tiền nhảy khi hover */}
            <p className="text-[15px] justify-center transition-transform duration-500 ease-in-out group-hover:scale-85 ">
              {nft.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTGrid;
