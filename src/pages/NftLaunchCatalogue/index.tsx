export default function () {
  return (
    <div className="p-page pt-10">
      <section className="mb-10">
        <h1 className="text-2xl font-semibold">
          Launch NFT on the Open Campus Network
        </h1>
        <p className="pt-2 text-mute">
          Choose the type of NFT which as per your use case.
        </p>
      </section>

      <section className="flex flex-wrap gap-10">
        {categories.map((category, key) => (
          <div
            className="w-[45%] flex border rounded-md border-mute/30 overflow-hidden relative cursor-pointer group hover:bg-foreground/30"
            role="button"
            key={key}
          >
            <figure
              className="absolute top-[32%] animate-[spin_10s_infinite] w-1/3 -left-[10%] rounded-full aspect-square bg-gradient-to-br 
            from-primary to-secondary blur-2xl group-hover:w-1/2 group-hover:-left-[20%] group-hover:top-[20%] duration-500"
            />

            <div className="w-[22%]">
              <img
                src={category.image}
                className="-rotate-6 scale-125 group-hover:saturate-150 group-hover:hue-rotate-[5deg] duration-300"
                alt={category.name}
              />
            </div>

            <div className="py-5 px-10 flex-1">
              <h2 className="text-xl font-medium">
                {category.name}
                <span className="text-sm text-mute pl-2">
                  {" "}
                  {category.subtitle}
                </span>
              </h2>

              <textarea
                className="pt-4 text-sm text-secondary/75 bg-transparent scrollbar-none w-full h-full resize-none cursor-pointer"
                readOnly
                disabled
              >
                {category.description}
              </textarea>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

const categories = [
  {
    name: "Public NFT (Collectible / Art)",
    image: "/images/cards-4-gradient.png",
    description:
      "Launch a public NFT, If you wish to launch a normal web3 based NFT for purposes such as collectibles, artworks, assets etc. This is the NFT type for you.",
  },
  {
    name: "Locked Content NFT",
    image: "/images/lock-gradient.png",
    description:
      "If you wish to distribute educational content put behind a paywall. This type of NFT can have scret content which will only be revealed to the on chain owner of the NFT.",
  },
  {
    name: "Academic Records",
    subtitle: "(Public)",
    image: "/images/certification.png",
    description:
      "If you wish to launch an NFT to be issued as anademic or any form of institutional records / decuments on chain. Note that this record and its information will be publicly visible.",
  },
  {
    name: "Academic Records",
    subtitle: "(Private / ZK Based)",
    image: "/images/zk.png",
    description:
      "Can be used to issue on chain academic or institutional documents. The data will be private and only visible to the owner & issuer. Either party may choose to share specific information within the document with someone else.",
  },
];
