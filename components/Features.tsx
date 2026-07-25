const features = [
  {
    title: "Wallet Identity",
    desc: "Connect using your Solana wallet."
  },
  {
    title: "No KYC",
    desc: "Trade anonymously."
  },
  {
    title: "Funded Accounts",
    desc: "Receive trading capital after passing."
  },
  {
    title: "Withdraw in SOL",
    desc: "Instant on-chain payouts."
  }
];

export default function Features() {
  return (
    <section className="grid md:grid-cols-4 gap-8 py-24">

      {features.map((item) => (

        <div
          key={item.title}
          className="rounded-2xl border border-zinc-800 p-8"
        >
          <h2 className="font-bold text-green-400">
            {item.title}
          </h2>

          <p className="mt-3 text-gray-400">
            {item.desc}
          </p>
        </div>

      ))}

    </section>
  );
}
